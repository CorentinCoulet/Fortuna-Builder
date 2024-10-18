import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { forEach } from "lodash";

const rarity = {
    0: 'Commun',
    1: 'Inhabituel',
    2: 'Rare',
    3: 'Mythique',
    4: 'Légendaire',
    5: 'Relique',
    6: 'Souvenir',
    7: 'Epique',
};

function replaceParamsInDescription(description, params, actionId) {
    const actionPatterns = {
        20: "[#1] PV",
        150: "[#1]% Coup critique",
        120: "[#1] Maîtrise Élémentaire",
        31: "[#1] PA",
        184: "[#1] Contrôle",
        1083: "[#1] Dégâts",
        175: "[#1] Parade",
        80: "[#1]% Résistance",
    };

    const pattern = actionPatterns[actionId];
    
    if (!pattern) {
        console.error(`ActionId ${actionId} non pris en charge.`);
        return description;
    }

    return pattern.replace(/\[#(\d+)\]/g, (match, index) => {
        const paramIndex = parseInt(index) - 1;
        return params[paramIndex] !== undefined ? params[paramIndex] : match;
    });
}

function isValidJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

async function processActionDescriptions(actionId, actionDescriptions, lvlItem) {
    let calculatedDescriptions = {};

    for (const id of Object.keys(actionDescriptions)) {
        const descriptionSet = actionDescriptions[id];
        const params = actionId[id];

        if (params) {
            for (const [lang, description] of Object.entries(descriptionSet)) {
                if (typeof description === 'string') {
                    const calculatedDescription = replaceParamsInDescription(description, params, lvlItem);
                    console.log(calculatedDescription);
                    if (!calculatedDescriptions[id]) {
                        calculatedDescriptions[id] = {};
                    }
                    calculatedDescriptions[id][lang] = calculatedDescription;
                }
            }
        } else {
            console.warn(`Aucun paramètre trouvé pour actionId: ${id}`);
        }
    }

    return calculatedDescriptions;
}

@Injectable()
export class ItemsProcessingService {
    constructor(private prisma: PrismaService) { }

    async processItems() {
        try {
            console.log('Début du traitement des items...');
            const batchSize = 100;
            const totalItems = await this.prisma.items.count();

            let offset = 0;

            while (offset < totalItems) {
                const items = await this.prisma.items.findMany({
                    skip: offset,
                    take: batchSize,
                });

                console.log(`Traitement du lot ${Math.floor(offset / batchSize) + 1} (${items.length} éléments)`);

                for (const item of items) {
                    if (item['sublimationParameters'] == null) {
                        // Traitement des équipements
                        const baseParameters = item['item']['baseParameters'];
                        let typeItemId = null;

                        if (baseParameters && baseParameters['itemTypeId']) {
                            typeItemId = baseParameters['itemTypeId'];
                        }

                        let equipmentPositionLabel = null;

                        if (typeItemId != null) {
                            const equipmentType = await this.prisma.equipmentItemTypes.findFirst({
                                where: {
                                    idEquipmentItemTypes: typeItemId,
                                },
                                select: {
                                    definition: true,
                                }
                            });

                            if (equipmentType && equipmentType['definition']) {
                                equipmentPositionLabel = equipmentType['definition']['equipmentPositions'];
                            }
                        }

                        let actionId = {};

                        if (typeof item['equipEffects'] === 'object' && item['equipEffects'] !== null) {
                            Object.values(item['equipEffects']).forEach(effect => {
                                const actionIdValue = effect['effect']['definition']['actionId'];
                                const params = effect['effect']['definition']['params'];

                                if (actionIdValue && params) {
                                    actionId[actionIdValue] = params;
                                }
                            });
                        }

                        let actionDescriptions = {};

                        if (Object.keys(actionId).length > 0) {
                            for (const id of Object.keys(actionId)) {
                                try {
                                    const action = await this.prisma.actions.findFirst({
                                        where: {
                                            idActions: parseInt(id),
                                        },
                                        select: {
                                            idActions: true,
                                            description: true,
                                        },
                                    });

                                    const actionIdValue = action['idActions'];
                                    const actionCalculDescription = action['description'];

                                    if (actionIdValue && actionCalculDescription) {
                                        actionDescriptions[actionIdValue] = actionCalculDescription;
                                    }
                                } catch (error) {
                                    console.error(`Erreur lors de la récupération de l'action avec idActions: ${id}`, error);
                                }
                            }
                        }

                        const calculatedDescriptions = await processActionDescriptions(actionId, actionDescriptions, item['level']);

                        const existingEquipment = await this.prisma.equipments.findFirst({
                            where: {
                                idItems: item['idItems'],
                                level: item['level'],
                                rarity: rarity[item['rarity']],
                            },
                            select: {
                                id: true,
                                idItems: true,
                                level: true,
                                rarity: true,
                                picture: true,
                                title: true,
                                typeItem: true,
                                effects: true,
                                description: true,
                            }
                        });

                        if (existingEquipment) {
                            const differences = [
                                existingEquipment['level'] !== item['level'],
                                existingEquipment['rarity'] !== rarity[item['rarity']],
                                existingEquipment['picture'] !== item['picture'],
                                JSON.stringify(existingEquipment['title']) !== JSON.stringify(item['title']),
                                (typeof existingEquipment['typeItem'] === 'string' && isValidJson(existingEquipment['typeItem'])
                                    ? JSON.stringify(JSON.parse(existingEquipment['typeItem']))
                                    : JSON.stringify(existingEquipment['typeItem']))
                                !==
                                (typeof equipmentPositionLabel === 'string' && isValidJson(equipmentPositionLabel)
                                    ? JSON.stringify(JSON.parse(equipmentPositionLabel))
                                    : JSON.stringify(equipmentPositionLabel)),

                                JSON.stringify(existingEquipment['effects']) !== JSON.stringify(calculatedDescriptions),
                                JSON.stringify(existingEquipment['description']) !== JSON.stringify(item['description']),
                            ];

                            if (differences.includes(true)) {
                                console.log(`Mise à jour de l'équipement : ${item['title']['fr']} (idItems: ${item['idItems']}})`);

                                await this.prisma.equipments.update({
                                    where: {
                                        id: existingEquipment['id'],
                                    },
                                    data: {
                                        level: item['level'],
                                        rarity: rarity[item['rarity']],
                                        picture: item['picture'],
                                        title: item['title'],
                                        typeItem: JSON.stringify(equipmentPositionLabel),
                                        effects: calculatedDescriptions,
                                        description: item['description'],
                                    }
                                });

                            } else {
                                console.log(`L'équipement ${item['title']['fr']} est déjà à jour.`);
                            }
                        } else {
                            console.log(`Création d'un nouvel équipement : ${item['title']['fr']} (idItems: ${item['idItems']})`);
                            await this.prisma.equipments.create({
                                data: {
                                    idItems: item['idItems'],
                                    level: item['level'],
                                    rarity: rarity[item['rarity']],
                                    picture: item['picture'],
                                    title: item['title'],
                                    typeItem: JSON.stringify(equipmentPositionLabel),
                                    effects: calculatedDescriptions,
                                    description: item['description'],
                                },
                            });
                        }
                    } else {
                        // Traitement des sublimations
                        console.log(`Création d'une nouvelle sublimation : ${item['title']['fr']} (idSubli: ${item['idItems']})`);

                        let sublimationType = 'common';

                        if (item['sublimationParameters']['isEpic'] == true) {
                            sublimationType = 'epic';
                        }
                        if (item['sublimationParameters']['isRelic'] == true) {
                            sublimationType = 'relic';
                        }

                        let actionId = {};

                        if (typeof item['equipEffects'] === 'object' && item['equipEffects'] !== null) {
                            Object.values(item['equipEffects']).forEach(effect => {
                                if (effect['effect'] && effect['effect']['definition']) {
                                    const actionIdValue = effect['effect']['definition']['actionId'];
                                    const params = effect['effect']['definition']['params'];
                
                                    if (actionIdValue && params) {
                                        actionId[actionIdValue] = params;
                                    }
                                }
                            });
                        }

                        let actionDescriptions = {};
                        if (Object.keys(actionId).length > 0) {
                            for (const id of Object.keys(actionId)) {
                                try {
                                    const action = await this.prisma.actions.findFirst({
                                        where: {
                                            idActions: parseInt(id),
                                        },
                                        select: {
                                            idActions: true,
                                            description: true,
                                        },
                                    });

                                    if (action && action['description']) {
                                        actionDescriptions[action['idActions']] = action['description'];
                                    }
                                } catch (error) {
                                    console.error(`Erreur lors de la récupération de l'action avec idActions: ${id}`, error);
                                }
                            }
                        }

                        const calculatedDescriptions = await processActionDescriptions(actionId, actionDescriptions, item['level']);

                        const existingSublimation = await this.prisma.sublimations.findFirst({
                            where: {
                                idSubli: item['idItems'],
                                rarity: item['rarity'],
                            },
                            select: {
                                id: true,
                                idSubli: true,
                                title: true,
                                type: true,
                                rarity: true,
                                pattern: true,
                                picture: true,
                                effects: true,
                                description: true, 
                            }
                        });

                        if (existingSublimation) {
                            const differences = [
                                existingSublimation['rarity'] !== item['rarity'],
                                existingSublimation['picture'] !== item['picture'],
                                JSON.stringify(existingSublimation['title']) !== JSON.stringify(item['title']),
                                JSON.stringify(existingSublimation['effects']) !== JSON.stringify(calculatedDescriptions),
                                JSON.stringify(existingSublimation['description']) !== JSON.stringify(item['description']),
                                JSON.stringify(existingSublimation['pattern']) !== JSON.stringify(item['sublimationParameters']['slotColorPattern']),
                                existingSublimation['type'] !== sublimationType,
                            ];

                            if (differences.includes(true)) {
                                console.log(`Mise à jour de la sublimation : ${item['title']['fr']} (idSubli: ${item['idItems']})`);

                                await this.prisma.sublimations.update({
                                    where: {
                                        id: existingSublimation['id'],
                                    },
                                    data: {
                                        title: item['title'],
                                        type: sublimationType,
                                        rarity: item['rarity'],
                                        pattern: item['sublimationParameters']['slotColorPattern'],
                                        picture: item['picture'],
                                        effects: calculatedDescriptions,
                                        description: item['description'],  
                                    },
                                });
                            } else {
                                console.log(`La sublimation ${item['title']['fr']} est déjà à jour.`);
                            }
                        } else {
                            console.log(`Création d'une nouvelle sublimation : ${item['title']['fr']} (idSubli: ${item['idItems']})`);
                            await this.prisma.sublimations.create({
                                data: {
                                    idSubli: item['idItems'],
                                    title: item['title'],
                                    type: sublimationType,
                                    rarity: item['rarity'],
                                    pattern: item['sublimationParameters']['slotColorPattern'],
                                    picture: item['picture'],
                                    effects: calculatedDescriptions,
                                    description: item['description'],
                                },
                            });
                        }
                    }
                }
                offset += batchSize;
            }
            console.log('Tous les items ont été traités.');
        }
        catch (error) {
            console.error('Erreur lors du traitement des items :', error);
        }
    }
}

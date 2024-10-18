import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {forEach} from "lodash";

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

function replaceParamsInDescription(description, params, lvlItem) {
    description = description.replace(/\[#(\d+)\]/g, (match, paramIndex) => {
        const index = (parseInt(paramIndex, 10) - 1) * 2;
        if (params[index] !== undefined && params[index + 1] !== undefined) {
            const calculatedValue = params[index + 1] * lvlItem + params[index];
            return calculatedValue.toString();
        }
        return match;
    });

    return description;
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

            let test = null;
            while (offset < totalItems) {
                // Récupérer un lot d'items
                const items = await this.prisma.items.findMany({
                    skip: offset,
                    take: batchSize,
                });

                console.log(`Traitement du lot ${Math.floor(offset / batchSize) + 1} (${items.length} éléments)`);

                for (const item of items) {
                    if (item.sublimationParameters == null) {
                        // récupération du type d'équipement (casque, ceinture etc)
                        const baseParameters = item.item?.['baseParameters'];
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

                            console.log(equipmentType);
                            console.log(equipmentType.definition);
                            if (equipmentType && equipmentType.definition) {
                                equipmentPositionLabel = equipmentType.definition['equipmentPositions'];
                                // console.log(`l'équipement ${item.title} est de type : ${equipmentPositionLabel}`);
                            }
                        }

                        // récupération des actions avec leurs paramètres de stats
                        let actionId = {};

                        if (typeof item.equipEffects === 'object' && item.equipEffects !== null) {
                            Object.values(item.equipEffects).forEach(effect => {
                                const actionIdValue = effect['effect']['definition']['actionId'];
                                const params = effect['effect']['definition']['params'];

                                if(actionIdValue && params){
                                    actionId[actionIdValue] = params;
                                }
                            });
                        }

                        // récupération des éléments à calculer avec les paramètres de stats
                        let actionDescriptions = {};

                        if(Object.keys(actionId).length > 0){
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

                                    if(actionIdValue && actionCalculDescription){
                                        actionDescriptions[actionIdValue] = actionCalculDescription;
                                    }
                                } catch (error) {
                                    console.error(`Erreur lors de la récupération de l'action avec idActions: ${id}`, error);
                                }
                            }
                        }

                        // calcul des éléments à remplacer dans la description de l'élément
                        const calculatedDescriptions = await processActionDescriptions(actionId, actionDescriptions, item.level);

                        test = calculatedDescriptions;

                        // await this.prisma.equipments.create({
                        //     data: {
                        //         idItems: item.idItems,
                        //         level: item.level,
                        //         rarity: rarity[item.rarity],
                        //         picture: item.picture,
                        //         title: item.title,
                        //         typeItem: equipmentPositionLabel,
                        //         effects: calculatedDescriptions,
                        //         description: item.description,
                        //     },
                        // });

                        break;
                    } else {
                        // console.log(item.sublimationParameters);
                    }
                }
               if(test !== null){
                   break;
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

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

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
                // Récupérer un lot d'items
                const items = await this.prisma.items.findMany({
                    skip: offset,
                    take: batchSize,
                });

                console.log(`Traitement du lot ${Math.floor(offset / batchSize) + 1} (${items.length} éléments)`);

                for (const item of items) {
                    if (item.sublimationParameters == null) {
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
                            });

                            if (equipmentType && equipmentType.definition) {
                                equipmentPositionLabel = equipmentType.definition['equipmentPositions'];
                                console.log(`l'équipement ${item.title} est de type : ${equipmentPositionLabel}`);
                            }
                        }

                        break;
                        // await this.prisma.equipments.create({
                        //     data: {
                        //         idItems: item.idItems,
                        //         level: item.level,
                        //         rarity: rarity[item.rarity],
                        //         picture: item.picture,
                        //         title: item.title,
                        //         typeItem: equipmentPositionLabel,
                        //         effects: item.equipEffects,
                        //         description: item.description,
                        //     },
                        // });
                    } else {
                        // console.log(item.sublimationParameters);
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

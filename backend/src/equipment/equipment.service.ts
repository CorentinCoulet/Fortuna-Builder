import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { chunk, isEqual } from 'lodash';
import pLimit from 'p-limit';

@Injectable()
export class EquipmentService {
  constructor(private readonly prisma: PrismaService) { }

  async importEquipmentData() {
    try {
      const batchSize = 100;
      const concurrencyLimit = 10;

      const handleJsonField = (jsonField: any) => {
        if (jsonField === undefined || (Array.isArray(jsonField) && jsonField.length === 0)) {
          return null;
        }

        if (typeof jsonField === 'object' && jsonField !== null) {
          const processedObject = Object.keys(jsonField).reduce((acc, key) => {
            const processedValue = handleJsonField(jsonField[key]);
            if (processedValue !== null) {
              acc[key] = processedValue;
            }
            return acc;
          }, {});

          if (Object.keys(processedObject).length === 0) {
            return null;
          }
          return processedObject;
        }

        return jsonField;
      };

      const actions = await this.prisma.actions.findMany({
        select: {
          idActions: true,
          effect: true,
          description: true,
        },
      });

      const actionBatches = chunk(actions, batchSize);

      for (const [batchIndex, actionBatch] of actionBatches.entries()) {
        const limit = pLimit(concurrencyLimit);

        const tasks = actionBatch.map((action, index) =>
          limit(async () => {
            const idIndex = index + 1;
            try {
              const existingAction = await this.prisma.actions.findUnique({
                where: { id: idIndex },
              });

              if (existingAction) {
                const shouldUpdate =
                  existingAction.effect !== action.effect ||
                  !isEqual(existingAction.description, action.description);

                if (shouldUpdate) {
                  await this.prisma.actions.update({
                    where: { id: idIndex },
                    data: {
                      idActions: action.idActions,
                      effect: action.effect,
                      description: handleJsonField(action.description),
                    },
                  });
                }
              } else {
                await this.prisma.actions.create({
                  data: {
                    id: idIndex,
                    idActions: action.idActions,
                    effect: action.effect,
                    description: handleJsonField(action.description),
                  },
                });
              }
            } catch (err) {
              console.error(`Erreur lors du traitement de l'action avec id: ${action.idActions}`, err);
            }
          })
        );

        await Promise.all(tasks);
        console.log(`Lot d'actions ${batchIndex + 1}/${actionBatches.length} traité avec ${actionBatch.length} éléments.`);
      }

      const equipmentItemTypes = await this.prisma.equipmentItemTypes.findMany({
        select: {
          idEquipmentItemTypes: true,
          parentId: true,
          title: true,
          definition: true,
        },
      });

      const equipmentItemTypeBatches = chunk(equipmentItemTypes, batchSize);

      for (const [batchIndex, typeBatch] of equipmentItemTypeBatches.entries()) {
        const limit = pLimit(concurrencyLimit);

        const tasks = typeBatch.map((type, index) =>
          limit(async () => {
            const idIndex = index + 1;
            try {
              const existingType = await this.prisma.equipmentItemTypes.findUnique({
                where: { id: idIndex },
              });

              if (existingType) {
                const shouldUpdate =
                  existingType.parentId !== type.parentId ||
                  !isEqual(existingType.title, type.title) ||
                  !isEqual(existingType.definition, type.definition);

                if (shouldUpdate) {
                  await this.prisma.equipmentItemTypes.update({
                    where: { id: idIndex },
                    data: {
                      idEquipmentItemTypes: type.idEquipmentItemTypes,
                      parentId: type.parentId,
                      title: handleJsonField(type.title),
                      definition: handleJsonField(type.definition),
                    },
                  });
                }
              } else {
                await this.prisma.equipmentItemTypes.create({
                  data: {
                    id: idIndex,
                    idEquipmentItemTypes: type.idEquipmentItemTypes,
                    parentId: type.parentId,
                    title: handleJsonField(type.title),
                    definition: handleJsonField(type.definition),
                  },
                });
              }
            } catch (err) {
              console.error(`Erreur lors du traitement de equipmentItemType avec id: ${type.idEquipmentItemTypes}`, err);
            }
          })
        );

        await Promise.all(tasks);
        console.log(`Lot de equipmentItemTypes ${batchIndex + 1}/${equipmentItemTypeBatches.length} traité avec ${typeBatch.length} éléments.`);
      }

      const itemTypes = await this.prisma.itemTypes.findMany({
        select: {
          idItemsTypes: true,
          parentId: true,
          title: true,
          definition: true,
        },
      });

      const itemTypeBatches = chunk(itemTypes, batchSize);

      for (const [batchIndex, itemTypeBatch] of itemTypeBatches.entries()) {
        const limit = pLimit(concurrencyLimit);

        const tasks = itemTypeBatch.map((type, index) =>
          limit(async () => {
            const idIndex = index + 1;
            try {
              const existingItemType = await this.prisma.itemTypes.findUnique({
                where: { id: idIndex },
              });

              if (existingItemType) {
                const shouldUpdate =
                  existingItemType.parentId !== type.parentId ||
                  !isEqual(existingItemType.title, type.title) ||
                  !isEqual(existingItemType.definition, type.definition);

                if (shouldUpdate) {
                  await this.prisma.itemTypes.update({
                    where: { id: idIndex },
                    data: {
                      idItemsTypes: type.idItemsTypes,
                      parentId: type.parentId,
                      title: handleJsonField(type.title),
                      definition: handleJsonField(type.definition),
                    },
                  });
                }
              } else {
                await this.prisma.itemTypes.create({
                  data: {
                    id: idIndex,
                    idItemsTypes: type.idItemsTypes,
                    parentId: type.parentId,
                    title: handleJsonField(type.title),
                    definition: handleJsonField(type.definition),
                  },
                });
              }
            } catch (err) {
              console.error(`Erreur lors du traitement de itemType avec id: ${type.idItemsTypes}`, err);
            }
          })
        );

        await Promise.all(tasks);
        console.log(`Lot de itemTypes ${batchIndex + 1}/${itemTypeBatches.length} traité avec ${itemTypeBatch.length} éléments.`);
      }

      const itemProperties = await this.prisma.itemProperties.findMany({
        select: {
          idItemsProperties: true,
          name: true,
          description: true,
        },
      });

      const itemPropertyBatches = chunk(itemProperties, batchSize);

      for (const [batchIndex, propertyBatch] of itemPropertyBatches.entries()) {
        const limit = pLimit(concurrencyLimit);

        const tasks = propertyBatch.map((property, index) =>
          limit(async () => {
            const idIndex = index + 1;
            try {
              const existingProperty = await this.prisma.itemProperties.findUnique({
                where: { id: idIndex },
              });

              if (existingProperty) {
                const shouldUpdate =
                  existingProperty.name !== property.name ||
                  existingProperty.description !== property.description;

                if (shouldUpdate) {
                  await this.prisma.itemProperties.update({
                    where: { id: idIndex },
                    data: {
                      idItemsProperties: property.idItemsProperties,
                      name: property.name,
                      description: property.description,
                    },
                  });
                }
              } else {
                await this.prisma.itemProperties.create({
                  data: {
                    id: idIndex,
                    idItemsProperties: property.idItemsProperties,
                    name: property.name,
                    description: property.description,
                  },
                });
              }
            } catch (err) {
              console.error(`Erreur lors du traitement de itemProperty avec id: ${property.idItemsProperties}`, err);
            }
          })
        );

        await Promise.all(tasks);
        console.log(`Lot de itemProperties ${batchIndex + 1}/${itemPropertyBatches.length} traité avec ${propertyBatch.length} éléments.`);
      }

      const items = await this.prisma.items.findMany({
        select: {
          idItems: true,
          level: true,
          rarity: true,
          title: true,
          item: true,
          useEffects: true,
          equipEffects: true,
          useCriticalEffects: true,
          sublimationParameters: true,
          description: true,
        },
      });

      const itemBatches = chunk(items, batchSize);

      for (const [batchIndex, itemBatch] of itemBatches.entries()) {
        const limit = pLimit(concurrencyLimit);

        const tasks = itemBatch.map((item, index) =>
          limit(async () => {
            const idIndex = index + 1;
            try {
              const existingItem = await this.prisma.items.findUnique({
                where: { id: idIndex },
              });

              if (existingItem) {
                const shouldUpdate =
                  !isEqual(existingItem.title, item.title) ||
                  !isEqual(existingItem.item, item.item) ||
                  !isEqual(existingItem.useEffects, item.useEffects) ||
                  !isEqual(existingItem.equipEffects, item.equipEffects) ||
                  !isEqual(existingItem.useCriticalEffects, item.useCriticalEffects) ||
                  !isEqual(existingItem.description, item.description);

                if (shouldUpdate) {
                  await this.prisma.items.update({
                    where: { id: idIndex },
                    data: {
                      idItems: item.idItems,
                      level: item.level,
                      rarity: item.rarity,
                      title: handleJsonField(item.title),
                      item: handleJsonField(item.item),
                      useEffects: handleJsonField(item.useEffects),
                      equipEffects: handleJsonField(item.equipEffects),
                      useCriticalEffects: handleJsonField(item.useCriticalEffects),
                      sublimationParameters: handleJsonField(item.sublimationParameters),
                      description: handleJsonField(item.description),
                    },
                  });
                }
              } else {
                await this.prisma.items.create({
                  data: {
                    id: idIndex,
                    idItems: item.idItems,
                    level: item.level,
                    rarity: item.rarity,
                    title: handleJsonField(item.title),
                    item: handleJsonField(item.item),
                    useEffects: handleJsonField(item.useEffects),
                    equipEffects: handleJsonField(item.equipEffects),
                    useCriticalEffects: handleJsonField(item.useCriticalEffects),
                    sublimationParameters: handleJsonField(item.sublimationParameters),
                    description: handleJsonField(item.description),
                  },
                });
              }
            } catch (err) {
              console.error(`Erreur lors du traitement de item avec id: ${item.idItems}`, err);
            }
          })
        );

        await Promise.all(tasks);
        console.log(`Lot de items ${batchIndex + 1}/${itemBatches.length} traité avec ${itemBatch.length} éléments.`);
      }

      const jobsItems = await this.prisma.jobsItems.findMany({
        select: {
          idJobsItems: true,
          level: true,
          rarity: true,
          itemTypeId: true,
          graphicParameters: true,
          title: true,
        },
      });

      const jobsItemBatches = chunk(jobsItems, batchSize);

      for (const [batchIndex, jobsItemBatch] of jobsItemBatches.entries()) {
        const limit = pLimit(concurrencyLimit);

        const tasks = jobsItemBatch.map((jobsItem, index) =>
          limit(async () => {
            const idIndex = index + 1;
            try {
              const existingJobsItem = await this.prisma.jobsItems.findUnique({
                where: { id: idIndex },
              });

              if (existingJobsItem) {
                const shouldUpdate =
                  existingJobsItem.level !== jobsItem.level ||
                  existingJobsItem.rarity !== jobsItem.rarity ||
                  existingJobsItem.itemTypeId !== jobsItem.itemTypeId ||
                  !isEqual(existingJobsItem.graphicParameters, jobsItem.graphicParameters) ||
                  !isEqual(existingJobsItem.title, jobsItem.title);

                if (shouldUpdate) {
                  await this.prisma.jobsItems.update({
                    where: { id: idIndex },
                    data: {
                      idJobsItems: jobsItem.idJobsItems,
                      level: jobsItem.level,
                      rarity: jobsItem.rarity,
                      itemTypeId: jobsItem.itemTypeId,
                      graphicParameters: handleJsonField(jobsItem.graphicParameters),
                      title: handleJsonField(jobsItem.title),
                    },
                  });
                }
              } else {
                await this.prisma.jobsItems.create({
                  data: {
                    id: idIndex,
                    idJobsItems: jobsItem.idJobsItems,
                    level: jobsItem.level,
                    rarity: jobsItem.rarity,
                    itemTypeId: jobsItem.itemTypeId,
                    graphicParameters: handleJsonField(jobsItem.graphicParameters),
                    title: handleJsonField(jobsItem.title),
                  },
                });
              }
            } catch (err) {
              console.error(`Erreur lors du traitement de jobsItem avec id: ${jobsItem.idJobsItems}`, err);
            }
          })
        );

        await Promise.all(tasks);
        console.log(`Lot de jobsItems ${batchIndex + 1}/${jobsItemBatches.length} traité avec ${jobsItemBatch.length} éléments.`);
      }

      const states = await this.prisma.states.findMany({
        select: {
          idStates: true,
          title: true,
        },
      });

      const stateBatches = chunk(states, batchSize);

      for (const [batchIndex, stateBatch] of stateBatches.entries()) {
        const limit = pLimit(concurrencyLimit);

        const tasks = stateBatch.map((state, index) =>
          limit(async () => {
            const idIndex = index + 1;
            try {
              const existingState = await this.prisma.states.findUnique({
                where: { id: idIndex },
              });

              if (existingState) {
                const shouldUpdate =
                  !isEqual(existingState.title, state.title);

                if (shouldUpdate) {
                  await this.prisma.states.update({
                    where: { id: idIndex },
                    data: {
                      idStates: state.idStates,
                      title: handleJsonField(state.title),
                    },
                  });
                }
              } else {
                await this.prisma.states.create({
                  data: {
                    id: idIndex,
                    idStates: state.idStates,
                    title: handleJsonField(state.title),
                  },
                });
              }
            } catch (err) {
              console.error(`Erreur lors du traitement de state avec id: ${state.idStates}`, err);
            }
          })
        );

        await Promise.all(tasks);
        console.log(`Lot de states ${batchIndex + 1}/${stateBatches.length} traité avec ${stateBatch.length} éléments.`);
      }
    } catch (error) {
      console.error('Erreur lors de l\'importation des données :', error);
    }
  }
}

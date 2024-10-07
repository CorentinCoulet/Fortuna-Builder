import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EquipmentService {
  constructor(private readonly prisma: PrismaService) {}

  async importEquipmentData() {
    try {
      // Import des actions
      const actions = await this.prisma.actions.findMany({
        select: {
          id: true, 
          effect: true,
          description: true,
        },
      });

      await Promise.all(actions.map(async (action) => {
        const existingAction = await this.prisma.actions.findFirst({
          where: { id: action.id },
        });

        if (existingAction) {
          await this.prisma.actions.update({
            where: { id: existingAction.id },
            data: {
              effect: action.effect,
              description: action.description,
            },
          });
        } else {
          await this.prisma.actions.create({
            data: {
              id: action.id,
              effect: action.effect,
              description: action.description,
            },
          });
        }
      }));

      // Import des equipmentItemTypes
      const equipmentItemTypes = await this.prisma.equipmentItemTypes.findMany();

      await Promise.all(equipmentItemTypes.map(async (type) => {
        const existingType = await this.prisma.equipmentItemTypes.findFirst({
          where: { equipmentItemTypeId: type.equipmentItemTypeId },
        });

        if (existingType) {
          await this.prisma.equipmentItemTypes.update({
            where: { id: existingType.id },
            data: {
              parentId: type.parentId,
              title: type.title,
              definition: type.definition,
            },
          });
        } else {
          await this.prisma.equipmentItemTypes.create({
            data: {
              equipmentItemTypeId: type.equipmentItemTypeId,
              parentId: type.parentId,
              title: type.title,
              definition: type.definition,
            },
          });
        }
      }));

      // Import des itemTypes
      const itemTypes = await this.prisma.itemTypes.findMany();

      await Promise.all(itemTypes.map(async (type) => {
        const existingItemType = await this.prisma.itemTypes.findFirst({
          where: { itemTypeId: type.itemTypeId },
        });

        if (existingItemType) {
          await this.prisma.itemTypes.update({
            where: { id: existingItemType.id },
            data: {
              parentId: type.parentId,
              title: type.title,
              definition: type.definition,
            },
          });
        } else {
          await this.prisma.itemTypes.create({
            data: {
              itemTypeId: type.itemTypeId,
              parentId: type.parentId,
              title: type.title,
              definition: type.definition,
            },
          });
        }
      }));

      // Import des itemProperties
      const itemProperties = await this.prisma.itemProperties.findMany();

      await Promise.all(itemProperties.map(async (property) => {
        const existingProperty = await this.prisma.itemProperties.findFirst({
          where: { itemPropertieId: property.itemPropertieId },
        });

        if (existingProperty) {
          await this.prisma.itemProperties.update({
            where: { id: existingProperty.id },
            data: {
              name: property.name,
              description: property.description,
            },
          });
        } else {
          await this.prisma.itemProperties.create({
            data: {
              itemPropertieId: property.itemPropertieId,
              name: property.name,
              description: property.description,
            },
          });
        }
      }));

      // Import des items
      const items = await this.prisma.items.findMany();

      await Promise.all(items.map(async (item) => {
        const existingItem = await this.prisma.items.findFirst({
          where: { itemId: item.itemId },
        });

        if (existingItem) {
          await this.prisma.items.update({
            where: { id: existingItem.id },
            data: {
              title: item.title,
              item: item.item,
              useEffects: item.useEffects,
              equipEffects: item.equipEffects,
              useCriticalEffects: item.useCriticalEffects,
              description: item.description,
            },
          });
        } else {
          await this.prisma.items.create({
            data: {
              itemId: item.itemId,
              title: item.title,
              item: item.item,
              useEffects: item.useEffects,
              equipEffects: item.equipEffects,
              useCriticalEffects: item.useCriticalEffects,
              description: item.description,
            },
          });
        }
      }));

      // Import des states
      const states = await this.prisma.states.findMany();

      await Promise.all(states.map(async (state) => {
        const existingState = await this.prisma.states.findFirst({
          where: { stateId: state.stateId },
        });

        if (existingState) {
          await this.prisma.states.update({
            where: { id: existingState.id },
            data: {
              title: state.title,
            },
          });
        } else {
          await this.prisma.states.create({
            data: {
              stateId: state.stateId,
              title: state.title,
            },
          });
        }
      }));

    } catch (error) {
      console.error('Erreur lors de l\'importation des données :', error);
    }
  }
}

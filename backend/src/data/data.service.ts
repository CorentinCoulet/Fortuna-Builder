import { HttpService } from '@nestjs/axios';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Cron } from '@nestjs/schedule';
import { firstValueFrom } from 'rxjs';
import { EquipmentService } from 'src/equipment/equipment.service';
import * as fs from 'fs';
import * as path from 'path';

const versionUrl = 'https://wakfu.cdn.ankama.com/gamedata/config.json';
const paths = [
  'actions',
  'equipmentItemTypes',
  'itemTypes',
  'itemProperties',
  'items',
  'states',
];

@Injectable()
export class DataService implements OnModuleInit {
  private version: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly prisma: PrismaService,
    private readonly equipmentService: EquipmentService,
  ) {}

  private getLatestVersion(): string {
    const versionFilePath = path.join(__dirname, 'latest_version.txt');
    if (fs.existsSync(versionFilePath)) {
      return fs.readFileSync(versionFilePath, 'utf8').trim();
    }
    return '';
  }

  private saveVersion(version: string) {
    const versionFilePath = path.join(__dirname, 'latest_version.txt');
    fs.writeFileSync(versionFilePath, version, 'utf8');
  }

  @Cron('0 0 * * *')
  async fetchAndSaveData() {
    try {
      const versionResponse = await firstValueFrom(this.httpService.get(versionUrl));
      this.version = versionResponse.data.version;

      const latestVersion = this.getLatestVersion();

      if (this.version !== latestVersion) {
        for (const pathKey of paths) {
          try {
            const targetUrl = `https://wakfu.cdn.ankama.com/gamedata/${this.version}/${pathKey}.json`;
            const response = await firstValueFrom(this.httpService.get(targetUrl));

            if (!response.data || !Array.isArray(response.data)) {
              continue;
            }

            // Récupérer les données actuelles de la base de données par table
            const existingData = await this.prisma[pathKey].findMany();

            // Créer des maps pour les données existantes / nouvelles données
            const existingDataMap = new Map(existingData.map((item) => [item.id || item.actionId, item]));
            const newDataMap = new Map(response.data.map((item) => [item.definition?.id || item.id, item]));

            // Ajouter ou mettre à jour les nouvelles données
            for (const [id, newItem] of newDataMap.entries()) {
              const existingItem = existingDataMap.get(id);

              if (existingItem) {
                // Mettre à jour si les données ont changé
                if (JSON.stringify(existingItem) !== JSON.stringify(newItem)) {
                  await this.prisma[pathKey].update({
                    where: { id },
                    data: this.formatDataForUpsert(newItem, pathKey),
                  });
                }
              } else {
                // Ajouter si l'élément n'existe pas
                await this.prisma[pathKey].create({
                  data: this.formatDataForUpsert(newItem, pathKey),
                });
              }
            }

            // Supprimer les éléments qui existent dans la base mais pas dans le JSON
            for (const [id, existingItem] of existingDataMap.entries()) {
              if (!newDataMap.has(id)) {
                await this.prisma[pathKey].delete({
                  where: { id },
                });
              }
            }

          } catch (error) {
            console.error(`Erreur lors de la récupération ou l'insertion des données pour ${pathKey}: `, error);
          }
        }

        this.saveVersion(this.version);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données de version:', error);
    }

    try {
      await this.equipmentService.importEquipmentData();
    } catch (error) {
      console.error('Erreur lors de l\'importation des équipements :', error);
    }
  }

  async onModuleInit() {
    await this.fetchAndSaveData();
  }

  async getDataForTable(table: string): Promise<any> {
    if (paths.includes(table)) {
      return this.prisma[table].findMany();
    } else {
      return { error: 'Table non trouvée' };
    }
  }

  // ajout des données
  private formatDataForUpsert(item: any, table: string): any {
    switch (table) {
      case 'actions':
        return {
          actionId: item.definition.id,
          effect: item.definition.effect,
          description: item.description,
        };

      case 'equipmentItemTypes':
        return {
          equipmentItemTypeId: item.definition.id,
          parentId: item.definition.parentId,
          title: item.title,
          definition: item.definition,
        };

      case 'itemTypes':
        return {
          itemTypeId: item.definition.id,
          parentId: item.definition.parentId,
          title: item.title,
          definition: item.definition,
        };

      case 'itemProperties':
        return {
          itemPropertieId: item.id,
          name: item.name,
          description: item.description,
        };

      case 'items':
        return {
          itemId: item.definition.item.id,
          title: item.title,
          item: item.definition.item,
          useEffects: item.definition.useEffects,
          equipEffects: item.definition.equipEffects,
          useCriticalEffects: item.definition.useCriticalEffects,
          description: item.description,
        };

      case 'states':
        return {
          stateId: item.definition.id,
          title: item.title,
        };

      default:
        return {};
    }
  }
}

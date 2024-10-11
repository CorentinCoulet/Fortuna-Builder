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
  'jobsItems',
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

            console.log(`Nombre d'éléments récupérés pour ${pathKey}: ${response.data.length}`);

            // Récupérer les données actuelles de la base de données par table
            const existingData = await this.prisma[pathKey].findMany();

            console.log(`Nombre d'éléments existants dans la base pour ${pathKey}: ${existingData.length}`);

            // Créer des maps pour les données existantes / nouvelles données
            let existingDataMap = new Map(existingData.map((item) => [item.id || item.actionId, item]));
            let newDataMap = new Map(response.data.map((item) => [item.definition?.id || item.id, item]));
            if(pathKey === 'items'){
              existingDataMap = new Map(existingData.map((item) => [item.idItems, item]));
              newDataMap = new Map(response.data.map((item) => [item.definition?.item?.id, item]));        
            }
            console.log(`Nombre d'éléments dans newDataMap pour ${pathKey}: ${newDataMap.size}`);

            // Ajouter ou mettre à jour les nouvelles données
            for (const [id, newItem] of newDataMap.entries()) {
              const existingItem: any = existingDataMap.get(id);

              console.log(`Traitement de l'élément ID: ${id} pour ${pathKey}`);

              if (existingItem) {
                // Mettre à jour si les données ont changé
                if (JSON.stringify(existingItem) !== JSON.stringify(newItem)) {
                  await this.prisma[pathKey].update({
                    where: { id: existingItem.id },
                    data: this.formatDataForUpsert(newItem, pathKey),
                  });
                  console.log(`Mise à jour de l'élément ID: ${id} dans ${pathKey}`);
                }
              } else {
                // Ajouter si l'élément n'existe pas
                await this.prisma[pathKey].create({
                  data: this.formatDataForUpsert(newItem, pathKey),
                });
                console.log(`Ajout de l'élément ID: ${id} dans ${pathKey}`);
              }
            }

            // Supprimer les éléments qui existent dans la base mais pas dans le JSON
            for (const [id, existingItem] of existingDataMap.entries() as IterableIterator<[any, any]>) {
              if (!newDataMap.has(id)) {
                await this.prisma[pathKey].delete({
                  where: { id: existingItem.id },
                });
                console.log(`Suppression de l'élément ID: ${id} de ${pathKey}`);
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

  // Formatage des données avec l'auto-incrément des id
  private formatDataForUpsert(item: any, table: string): any {
    switch (table) {
      case 'actions':
        return {
          idActions: item.definition.id,
          effect: item.definition.effect,
          description: item.description,
        };

      case 'equipmentItemTypes':
        return {
          idEquipmentItemTypes: item.definition.id,
          parentId: item.definition.parentId,
          title: item.title,
          definition: item.definition,
        };

      case 'itemTypes':
        return {
          idItemsTypes: item.definition.id,
          parentId: item.definition.parentId,
          title: item.title,
          definition: item.definition,
        };

      case 'itemProperties':
        return {
          idItemsProperties: item.id,
          name: item.name,
          description: item.description,
        };

      case 'items':
        return {
          idItems: item.definition.item.id,
          level: item.definition.item.level,
          rarity: item.definition.item.baseParameters.rarity,
          title: item.title,
          item: item.definition.item,
          useEffects: item.definition.useEffects,
          equipEffects: item.definition.equipEffects,
          useCriticalEffects: item.definition.useCriticalEffects,
          sublimationParameters: item.definition.item.sublimationParameters,
          description: item.description,
        };

      case 'jobsItems':
        return {
          idJobsItems: item.definition.id,
          level: item.definition.level,
          rarity: item.definition.rarity,
          itemTypeId: item.definition.itemTypeId,
          graphicParameters: item.definition.graphicParameters,
          title: item.title,
        };

      case 'states':
        return {
          idStates: item.definition.id,
          title: item.title,
        };

      default:
        return {};
    }
  }
}

import { HttpService } from '@nestjs/axios';
import {Injectable, OnModuleInit} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Cron } from '@nestjs/schedule';
import { firstValueFrom } from 'rxjs';
import * as fs from 'fs';
import * as path from 'path';

const versionUrl = 'https://wakfu.cdn.ankama.com/gamedata/config.json';
const paths = [
  'actions',
  'equipmentItemTypes',
  'itemTypes',
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
        console.log(`Nouvelle version détectée : ${this.version}`);

        for (const pathKey of paths) {
          try {
            const targetUrl = `https://wakfu.cdn.ankama.com/gamedata/${this.version}/${pathKey}.json`;
            const response = await firstValueFrom(this.httpService.get(targetUrl));
            
            switch (pathKey) {
              case 'actions':
                await this.prisma.actions.createMany({
                  data: response.data.map(item => ({
                    definition: item.definition,
                    description: item.description,
                    version: this.version,
                  })),
                });
                break;
              case 'equipmentItemTypes':
                await this.prisma.equipmentItemTypes.createMany({
                  data: response.data.map(item => ({
                    definition: item.definition,
                    title: item.title,
                    version: this.version,
                  })),
                });
                break;
              case 'itemTypes':
                await this.prisma.itemTypes.createMany({
                  data: response.data.map(item => ({
                    definition: item.definition,
                    title: item.title,
                    version: this.version,
                  })),
                });
                break;
              case 'items':
                await this.prisma.items.createMany({
                  data: response.data.map(item => ({
                    definition: item.definition,
                    title: item.title,
                    version: this.version,
                  })),
                });
                break;
              case 'jobsItems':
                await this.prisma.jobItems.createMany({
                  data: response.data.map(item => ({
                    definition: item.definition,
                    title: item.title,
                    description: item.description,
                    version: this.version,
                  })),
                });
                break;
              case 'states':
                await this.prisma.states.createMany({
                  data: response.data.map(item => ({
                    definition: item.definition,
                    title: item.title || '',
                    version: this.version,
                  })),
                });
                break;
              default:
                console.warn(`Path non reconnu : ${pathKey}`);
            }

            console.log(`Données sauvegardées dans la base de données pour ${pathKey}`);
          } catch (error) {
            console.error(`Erreur lors de la récupération des données pour ${pathKey}: `, error);
          }
        }

        this.saveVersion(this.version);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données de version:', error);
    }
  }

  async onModuleInit() {
    await this.fetchAndSaveData();
  }

  async getDataForTable(table: string): Promise<any> {
    switch (table) {
      case 'actions':
        return this.prisma.actions.findMany();
      case 'equipmentItemTypes':
        return this.prisma.equipmentItemTypes.findMany();
      case 'itemTypes':
        return this.prisma.itemTypes.findMany();
      case 'items':
        return this.prisma.items.findMany();
      case 'jobsItems':
        return this.prisma.jobItems.findMany();
      case 'states':
        return this.prisma.states.findMany();
      default:
        return { error: 'Table non trouvée' };
    }
  }
}

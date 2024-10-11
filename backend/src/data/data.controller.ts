import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { PrismaService } from '../../prisma/prisma.service';
import { VersionService } from '../version/version.service';

@Controller('api')
export class DataController {
  private readonly tables = ['actions', 'equipmentItemTypes', 'itemTypes', 'itemProperties', 'jobsItems', 'items', 'states'];

  constructor(
    private readonly prisma: PrismaService,
    private readonly versionService: VersionService
  ) { }

  @Get('/')
  async getIndex() {
    const version = this.versionService.getLatestVersion();

    if (!version) {
      return 'Version non disponible';
    }

    const pathsList = this.tables.map(table => `<li><a href="/api/${table}">${version}/${table}</a></li>`).join('');

    return `
      <h1>Bienvenue à l'API</h1>
      <p>Version actuelle : ${version}</p>
      <ul>
        ${pathsList}
      </ul>
    `;
  }

  @Get('/version')
  async getVersion(): Promise<{ version: string }> {
    const version = this.versionService.getLatestVersion();
    return { version };
  }

  @Get('/:table')
  async getTableData(@Param('table') table: string, @Res() res: Response) {
    if (!this.tables.includes(table)) {
      return res.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        error: 'Table non trouvée',
      });
    }

    try {
      let data: Array<any> = [];
      // Mappage spécifique pour chaque table selon le schéma fourni
      switch (table) {
        case 'actions':
          data = await this.prisma.actions.findMany({
            select: {
              idActions: true,
              effect: true,
              description: true,
            },
          });
          break;

        case 'equipmentItemTypes':
          data = await this.prisma.equipmentItemTypes.findMany({
            select: {
              idEquipmentItemTypes: true,
              parentId: true,
              title: true,
              definition: true,
            },
          });
          break;

        case 'itemTypes':
          data = await this.prisma.itemTypes.findMany({
            select: {
              idItemsTypes: true,
              parentId: true,
              title: true,
              definition: true,
            },
          });
          break;

        case 'itemProperties':
          data = await this.prisma.itemProperties.findMany({
            select: {
              idItemsProperties: true,
              name: true,
              description: true,
            },
          });
          break;

        case 'items':
          data = await this.prisma.items.findMany({
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
          break;

        case 'jobsItems':
          data = await this.prisma.jobsItems.findMany({
            select: {
              idJobsItems: true,
              level: true,
              rarity: true,
              itemTypeId: true,
              graphicParameters: true,
              title: true,
            },
          });
          break;

        case 'states':
          data = await this.prisma.states.findMany({
            select: {
              idStates: true,
              title: true,
            },
          });
          break;

        default:
          return res.status(HttpStatus.NOT_FOUND).json({
            statusCode: HttpStatus.NOT_FOUND,
            error: 'Table non trouvée',
          });
      }

      return res.status(HttpStatus.OK).json(data);
    } catch (error) {
      console.error(`Erreur lors de la récupération des données pour ${table}: `, error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'Erreur lors de la récupération des données',
      });
    }
  }
}

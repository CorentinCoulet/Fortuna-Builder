import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { PrismaService } from '../../prisma/prisma.service';
import { VersionService } from '../version/version.service';

@Controller('api')
export class DataController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly versionService: VersionService
  ) {}

  @Get('/')
  async getIndex(@Res() res: Response) {
    const tables = ['actions', 'equipmentItemTypes', 'itemTypes', 'items', 'jobsItems', 'states'];
    const version = this.versionService.getLatestVersion();
    
    if (!version) {
      return res.send('Version non disponible');
    }

    const pathsList = tables.map(table => `<li><a href="/api/${table}">${version}/${table}</a></li>`).join('');
    
    res.send(`
      <h1>Bienvenue à l'API</h1>
      <p>Version actuelle : ${version}</p>
      <ul>
        ${pathsList}
      </ul>
    `);
  }

  @Get('/version')
  async getVersion(@Res() res: Response) {
    const version = this.versionService.getLatestVersion();
    res.json({ version });
  }

  @Get('/:table')
  async getTableData(@Param('table') table: string, @Res() res: Response) {
    const tables: { [key: string]: any } = {
      actions: this.prisma.actions.findMany(),
      equipmentItemTypes: this.prisma.equipmentItemTypes.findMany(),
      itemTypes: this.prisma.itemTypes.findMany(),
      items: this.prisma.items.findMany(),
      jobItems: this.prisma.jobItems.findMany(),
      states: this.prisma.states.findMany(),
    };

    if (!tables[table]) {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'Table non trouvée' });
    }

    try {
      const data = await tables[table];
      res.json(data);
    } catch (error) {
      console.error(`Erreur lors de la récupération des données pour ${table}: `, error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Erreur lors de la récupération des données' });
    }
  }
}

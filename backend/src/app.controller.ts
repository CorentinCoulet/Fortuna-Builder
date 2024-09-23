import { Controller, Get, Param, Res } from '@nestjs/common';
import { DataService } from './data/data.service'; 
@Controller()
export class AppController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  async getHome(): Promise<string> {
    const tables = [
      'actions',
      'equipmentItemTypes',
      'itemTypes',
      'items',
      'jobsItems',
      'states'
    ];
    const tableList = tables
      .map(
        table => `<li><a href="/api/${table}">${table}</a></li>`
      )
      .join('');

    return `
      <h1>Liste des Tables</h1>
      <ul>
        ${tableList}
      </ul>
    `;
  }

  // ajout des jeux de données
  @Get('/api/fetch-and-save')
  async fetchAndSaveData(): Promise<string> {
    try {
      await this.dataService.fetchAndSaveData();
      return 'Data fetching and saving initiated successfully';
    } catch (error) {
      console.error('Erreur lors de l\'importation des données : ', error);
      return 'Erreur lors de l\'importation des données';
    }
  }

  @Get('/api/:table')
  async getTableData(@Param('table') table: string): Promise<any> {
    const validTables = ['actions', 'equipmentItemTypes', 'itemTypes', 'items', 'jobsItems', 'states'];
    
    if (!validTables.includes(table)) {
      return { error: 'Table non trouvée' };
    }

    try {
      const data = await this.dataService.getDataForTable(table);
      return data;
    } catch (error) {
      console.error(`Erreur lors de la récupération des données pour ${table}: `, error);
      return { error: 'Erreur lors de la récupération des données' };
    }
  }
}

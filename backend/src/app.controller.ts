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

  @Get('/api/:table')
  async getTableData(@Param('table') table: string): Promise<any> {
    if (!['actions', 'equipmentItemTypes', 'itemTypes', 'items', 'jobsItems', 'states'].includes(table)) {
      return { error: 'Table non trouvée' };
    }

    const data = await this.dataService.getDataForTable(table); 
    return data;
  }
}

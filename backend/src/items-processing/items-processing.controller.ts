import { Controller, Post } from '@nestjs/common';
import { ItemsProcessingService } from './items-processing.service';

@Controller('items')
export class ItemsProcessingController {
  constructor(private readonly itemsProcessingService: ItemsProcessingService) {}

  @Post('process')
  async triggerItemsProcessing(): Promise<string> {
    console.log('Controller : lancement du traitement...');
    await this.itemsProcessingService.processItems();
    return 'Tous les éléments ont été chargés !';
  }
}

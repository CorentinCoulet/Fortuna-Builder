import { Controller, Post } from '@nestjs/common';
import { EquipmentService } from './equipment.service';

@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post('download-images')
  async downloadImages() {

    try {
      await this.equipmentService.downloadAllImages();
      return { message: 'Téléchargement des images réussi' };
    } catch (error) {
      return {
        message: 'Erreur lors du téléchargement des images',
        error: error.message,
      };
    }
  }
}

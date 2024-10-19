import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Get('equipments')
    async getEquipments() {
        return this.itemsService.getEquipments();
    }

    @Get('sublimations')
    async getSublimations() {
        return this.itemsService.getSublimations();
    }
}

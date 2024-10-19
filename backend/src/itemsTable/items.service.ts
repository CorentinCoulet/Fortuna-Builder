import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ItemsService {
    constructor(private prisma: PrismaService) { }

    async getEquipments() {
        return this.prisma.equipments.findMany();
    }

    async getSublimations() {
        return this.prisma.sublimations.findMany();
    }
}

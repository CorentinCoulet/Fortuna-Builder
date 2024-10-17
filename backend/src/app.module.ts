import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { DataService } from './data/data.service';
import { VersionService } from './version/version.service';
import { AppController } from './app.controller';
import { DataController } from './data/data.controller';
import { EquipmentService } from './equipment/equipment.service';
import { AuthModule } from './auth/auth.module';
import { BuildsModule } from './builds/builds.module';
import { EquipmentController } from './equipment/equipment.controller';
import { ItemsProcessingService } from './items-processing/items-processing.service';
import { ItemsProcessingController } from './items-processing/items-processing.controller';
@Module({
  imports: [AuthModule, BuildsModule, HttpModule, ScheduleModule.forRoot(), ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'itemsWebp'),
    serveRoot: '/images',
  }),],
  controllers: [AppController, DataController, EquipmentController, ItemsProcessingController],
  providers: [DataService, PrismaService, VersionService, EquipmentService, ItemsProcessingService],
  exports: [ItemsProcessingService],
})
export class AppModule {}

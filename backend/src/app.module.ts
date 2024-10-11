import { Module } from '@nestjs/common';
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
@Module({
  imports: [AuthModule, BuildsModule, HttpModule, ScheduleModule.forRoot()],
  controllers: [AppController, DataController],
  providers: [DataService, PrismaService, VersionService, EquipmentService],
})
export class AppModule {}

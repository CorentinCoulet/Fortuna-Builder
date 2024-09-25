import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { DataService } from './data/data.service';
import { VersionService } from './version/version.service';
import { AppController } from './app.controller';
import { DataController } from './data/data.controller';

@Module({
  imports: [HttpModule, ScheduleModule.forRoot()],
  controllers: [AppController, DataController],
  providers: [DataService, PrismaService, VersionService],
})
export class AppModule {}

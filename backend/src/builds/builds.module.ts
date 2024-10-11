import { Module } from '@nestjs/common';
import { BuildsService } from './builds.service';
import { BuildsController } from './builds.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [BuildsService, PrismaService],
  controllers: [BuildsController],
})
export class BuildsModule {}

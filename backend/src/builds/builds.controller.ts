import { Controller, Post, Get, Body, UseGuards, Req } from '@nestjs/common';
import { BuildsService } from './builds.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('builds')
@UseGuards(JwtAuthGuard)
export class BuildsController {
  constructor(private buildsService: BuildsService) {}

  @Post()
  async createBuild(@Req() req, @Body('build') build: any) {
    const userId = req.user.id;
    return this.buildsService.createBuild(userId, build);
  }

  @Get()
  async getBuilds(@Req() req) {
    const userId = req.user.id;
    return this.buildsService.getBuilds(userId);
  }
}

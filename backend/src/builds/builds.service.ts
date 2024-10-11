import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BuildsService {
  constructor(private prisma: PrismaService) {}

  async createBuild(userId: number, buildData: any) {
    return this.prisma.builds.create({
      data: {
        idUser: userId,
        build: buildData, 
      },
    });
  }

  async getBuilds(userId: number) {
    return this.prisma.builds.findMany({
      where: {
        idUser: userId,
      },
    });
  }

  async deleteBuild(buildId: number, userId: number) {
    const build = await this.prisma.builds.findUnique({
      where: { id: buildId },
    });

    if (build && build.idUser === userId) {
      return this.prisma.builds.delete({
        where: { id: buildId },
      });
    } else {
      throw new Error('Aucun build trouvé');
    }
  }
}

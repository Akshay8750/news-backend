import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.article.findMany();
  }

  async createDummy() {
    return this.prisma.article.create({
      data: {
        title: "Test News",
        description: "This is test",
        content: "Full content",
        sourceName: "Manual",
        sourceUrl: "https://test.com/1",
        publishedAt: new Date(),
      },
    });
  }
}
import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], // 🔥 VERY IMPORTANT
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
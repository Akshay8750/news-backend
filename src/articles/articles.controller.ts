import { Controller, Get } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Get()
  getAll() {
    return this.articlesService.findAll();
  }

  @Get('create')
  create() {
    return this.articlesService.createDummy();
  }
}
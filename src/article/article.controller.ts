import { Controller, Get } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  @Get()
  queryArticle(): string {
    return '<h2>我是文章页面<h2>';
  }
}

import { Controller, Get, Query, Post } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  @Get()
  queryArticle(): string {
    return '<h2>我是文章页面<h2>';
  }

  @Get('/add')
  articleAdd(@Query() query): string {
    console.log(query);
    return query;
  }

  @Post('/editor')
  articleEditor(): string {
    return '123';
  }
}

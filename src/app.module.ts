import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './article/article.controller';
import { getConfig } from './utils';

console.log(getConfig);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: false,
      load: [getConfig],
    }),
  ],
  controllers: [AppController, ArticleController],
  providers: [AppService],
})
export class AppModule {}

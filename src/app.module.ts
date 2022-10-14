import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './article/article.controller';
import { getConfig } from './utils';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

console.log(getConfig);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: false,
      load: [getConfig],
    }),
    // mysql连接
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123abcde',
      database: 'blog',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController, ArticleController, UserController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly dataSource: DataSource) {
    console.log(dataSource);
  }
}

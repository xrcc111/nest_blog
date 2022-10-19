import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getConfig } from './utils';

const config = getConfig();
console.log(config);
const PORT = config.PORT || 8080;
const PREFIX = config.PREFIX || './';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () => {
    Logger.log(`服务已启动:localhost:${PORT}`);
  });
}
bootstrap();

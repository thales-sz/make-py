import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const configService = app.get<ConfigService>(ConfigService);

  await app.listen(configService.get('PORT'));

  const logger = new Logger(AppModule.name);

  logger.log(`Server is running on ${await app.getUrl()}`);
}

bootstrap();

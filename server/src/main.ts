import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const logger = new Logger(AppModule.name);
  const configService = app.get<ConfigService>(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.enableCors({
    origin: ['https://make-py.vercel.app', 'http://localhost:5173'],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
  });

  app.use(
    session({
      secret: configService.get('SESSION_SECRET'),
      resave: false,
      saveUninitialized: false,
    }),
  );

  await app.listen(configService.get('PORT'));

  logger.log(`Server is running on ${await app.getUrl()}`);
}

bootstrap();

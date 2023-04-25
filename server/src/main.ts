import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import 'dotenv/config';

const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: ['error', 'warn'],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app
    .listen(PORT)
    .then(() => {
      console.log(`App running on PORT => ${PORT}`);
    })
    .catch((err) => console.error(`Error while trying to server up: ${err}`));
}

bootstrap();

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import 'dotenv/config';
import { PrismaService } from './prisma/prisma.service';

const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app
    .listen(PORT)
    .then(() => {
      console.log(`App running on PORT: ${PORT}`);
    })
    .catch((err) => console.error(`Error: ${err}`));
}

bootstrap();

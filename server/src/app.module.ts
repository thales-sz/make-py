import { Module } from '@nestjs/common';

import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, PrismaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

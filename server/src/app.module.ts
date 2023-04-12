import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, PrismaModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [UsersModule, PrismaModule, ProductsModule, SalesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

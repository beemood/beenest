import { PrismaClient } from '@beenest/inventory-db';
import { PrismaModule } from '@beenest/prisma';
import { Module } from '@nestjs/common';
import { CategoryModule } from './resources/category/category.module.js';

@Module({
  imports: [
    CategoryModule,
    PrismaModule.forRoot({
      clientInstance: new PrismaClient(),
    }),
  ],
})
export class InventoryModule {}

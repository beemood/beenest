import { PrismaModule } from '@beenest/prisma';
import { Module } from '@nestjs/common';
import { CategoryModule } from './resources/category/category.module.js';

@Module({
  imports: [
    CategoryModule,
    PrismaModule.forRoot({
      clientInstance: {
        category: {
          findMany() {
            return [
              {
                id: 1,
                name: 'Mocked category',
              },
            ];
          },
        },
      },
    }),
  ],
})
export class InventoryModule {}

import { PrismaModule } from '@beenest/prisma';
import { Module } from '@nestjs/common';
import { CategoryEventListener } from './category-event.listener.js';
import { CategoryController } from './category.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['category'] })],
  controllers: [CategoryController],
  providers: [CategoryEventListener],
})
export class CategoryModule {}

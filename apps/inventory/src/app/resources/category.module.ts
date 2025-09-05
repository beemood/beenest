import { PrismaModule } from '@beenest/prisma';
import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['category'] })],
  controllers: [CategoryController],
})
export class CategoryModule {}

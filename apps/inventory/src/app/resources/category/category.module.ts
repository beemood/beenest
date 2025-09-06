import { PrismaModule } from '@beenest/prisma';
import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller.js';
import { CategoryListener } from './category.listener.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['category'] })],
  controllers: [CategoryController],
  providers: [CategoryListener],
})
export class CategoryModule {}

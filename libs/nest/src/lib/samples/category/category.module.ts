import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller.js';

@Module({
  imports: [],
  providers: [],
  controllers: [CategoryController],
})
export class CategoryModule {}

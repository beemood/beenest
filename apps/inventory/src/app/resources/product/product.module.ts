import { PrismaModule } from '@beenest/prisma';
import { Module } from '@nestjs/common';
import { ProductController } from './product.controller.js';
import { ProductListener } from './product.listener.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['product'] })],
  controllers: [ProductController],
  providers: [ProductListener],
})
export class ProductModule {}

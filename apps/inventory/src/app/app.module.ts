import { CommonModule } from '@beenest/nest';
import { Module } from '@nestjs/common';
import { InventoryModule } from './inventory.module.js';

@Module({
  imports: [CommonModule, InventoryModule],
})
export class AppModule {}

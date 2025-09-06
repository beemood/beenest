import { CommonModule } from '@beenest/nest';
import { Module } from '@nestjs/common';
import { ContactModule } from './contact.module.js';

@Module({
  imports: [CommonModule, ContactModule],
})
export class AppModule {}

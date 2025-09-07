import { CommonModule } from '@beenest/nest';
import { Module } from '@nestjs/common';
import { ContactAppModule } from './contact-app.module.js';

@Module({
  imports: [CommonModule, ContactAppModule],
})
export class AppModule {}

import { PrismaModule } from '@beenest/prisma';
import { Module } from '@nestjs/common';
import { EmailController } from './email.controller.js';
import { EmailListener } from './email.listener.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['email'] })],
  controllers: [EmailController],
  providers: [EmailListener],
})
export class EmailModule {}

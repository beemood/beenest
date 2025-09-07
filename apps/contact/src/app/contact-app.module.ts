import { PrismaClient } from '@beenest/contact-db';
import { PrismaModule } from '@beenest/prisma';
import { Module } from '@nestjs/common';
import { EmailModule } from './resources/email/email.module.js';

@Module({
  imports: [
    EmailModule,
    PrismaModule.forRoot({
      clientInstance: new PrismaClient(),
    }),
  ],
})
export class ContactAppModule {}

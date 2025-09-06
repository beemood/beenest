import { PrismaClient } from '@beenest/contact-db';
import { PrismaModule } from '@beenest/prisma';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    PrismaModule.forRoot({
      clientInstance: new PrismaClient(),
    }),
  ],
})
export class ContactModule {}

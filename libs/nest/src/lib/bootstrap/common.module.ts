import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ResourceEventInterceptor } from '../events/resource-event-interceptor.js';

/**
 * Inclues common modules such as ConfigModule, EventEmitterModule, ThrottlerModule.
 * @group Modules
 */
@Module({
  imports: [
    ConfigModule.forRoot(),
    EventEmitterModule.forRoot({ delimiter: '.' }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 10_000,
          limit: 3,
          blockDuration: 10_000,
        },
      ],
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },

    { 
      provide:APP_INTERCEPTOR, 
      useClass:ResourceEventInterceptor
    }
  ],
  exports: [ConfigModule, EventEmitterModule, ThrottlerModule],
})
export class CommonModule {}

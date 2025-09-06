import { inferResourceEventName } from '@beenest/utils';
import {
  type CallHandler,
  type ExecutionContext,
  Inject,
  Injectable,
  type NestInterceptor,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { tap } from 'rxjs';

@Injectable()
export class ResourceEventInterceptor implements NestInterceptor {
  constructor(
    @Inject(EventEmitter2) protected readonly emitter: EventEmitter2
  ) {}
  intercept(context: ExecutionContext, next: CallHandler) {
    const className = context.getClass().name;
    const methodName = context.getHandler().name;
    const eventName = inferResourceEventName(className, methodName);

    const { query, body, params } = context.switchToHttp().getRequest();

    this.emitter.emitAsync(eventName, {
      request: true,
      body,
      query,
      params,
    });

    return next.handle().pipe(
      tap((body) => {
        this.emitter.emitAsync(eventName, { response: true, body });
      })
    );
  }
}

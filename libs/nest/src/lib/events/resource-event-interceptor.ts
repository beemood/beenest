import {
  inferOperationName,
  inferResourceEventName,
  inferResourceName,
} from '@beenest/utils';
import {
  type CallHandler,
  type ExecutionContext,
  Inject,
  Injectable,
  type NestInterceptor,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { tap } from 'rxjs';
import { v4 } from 'uuid';

@Injectable()
export class ResourceEventInterceptor implements NestInterceptor {
  constructor(
    @Inject(EventEmitter2) protected readonly emitter: EventEmitter2
  ) {}
  intercept(context: ExecutionContext, next: CallHandler) {
    const className = context.getClass().name;
    const methodName = context.getHandler().name;
    const eventName = inferResourceEventName(className, methodName);

    const resouceName = inferResourceName(className);
    const operationName = inferOperationName(methodName);

    const { query, body, params } = context.switchToHttp().getRequest();

    const operationId = v4();

    const requestPayload = {
      operationId,
      resouceName,
      operationName,
      eventName,
      request: {
        body,
        query,
        params,
      },
    };

    this.emitter.emitAsync(eventName, requestPayload);

    return next.handle().pipe(
      tap((body) => {
        this.emitter.emitAsync(eventName, {
          ...requestPayload,
          response: { body },
        });
      })
    );
  }
}

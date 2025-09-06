import {
  inferResourceEventName,
  isOperationNameOrThrow
} from '@beenest/utils';
import { OnEvent as __OnEvent } from '@nestjs/event-emitter';

export function OnEvent(): MethodDecorator {
  return (...args) => {
    const methodName = args[1].toString();
    isOperationNameOrThrow(methodName);
    const className = args[0].constructor.name;

    const eventName = inferResourceEventName(className, methodName);
    __OnEvent(eventName)(...args);
  };
}

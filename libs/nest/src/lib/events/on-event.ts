import {
  inferOperationName,
  inferResourceName,
  isOperationNameOrThrow,
  names,
} from '@beenest/utils';
import { OnEvent as __OnEvent } from '@nestjs/event-emitter';

export function OnEvent(): MethodDecorator {
  return (...args) => {
    const methodName = args[1].toString();
    isOperationNameOrThrow(methodName);
    const operationName = inferOperationName(methodName);
    const className = args[0].constructor.name;
    const resouceName = inferResourceName(className);
    const eventResouceName = names(resouceName).pascalCase;

    __OnEvent([eventResouceName, operationName].join('.'))(...args);
  };
}

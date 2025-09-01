import { getOperationName } from '@beenest/utils';
import { SetMetadata } from '@nestjs/common';

export const OPERATION_NAME_METADATA = Symbol('OPERATION_NAME_METADATA');

/**
 * Set operation name metadata
 * @param name operation name
 * @returns MethodDecorator
 */
export function OperationName(name?: string): MethodDecorator {
  return (...args) => {
    if (name) {
      SetMetadata(OPERATION_NAME_METADATA, name)(...args);
    } else {
      SetMetadata(
        OPERATION_NAME_METADATA,
        getOperationName(args[1].toString())
      )(...args);
    }
  };
}

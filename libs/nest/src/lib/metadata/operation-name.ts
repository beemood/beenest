import { inferOperationName } from '@beenest/utils';
import { SetMetadata } from '@nestjs/common';

export const OPERATION_NAME_METADATA_KEY = Symbol('OPERATION_NAME_METADATA_KEY');

/**
 * Set {@link name} to {@link OPERATION_NAME_METADATA_KEY}
 *
 * @group Metadata
 * @param name Optional operation name or infered automatically
 * @returns MethodDecorator
 *
 */
export function OperationName(name?: string): MethodDecorator {
  return (...args) => {
    if (name) {
      SetMetadata(OPERATION_NAME_METADATA_KEY, name)(...args);
    } else {
      SetMetadata(
        OPERATION_NAME_METADATA_KEY,
        inferOperationName(args[1].toString())
      )(...args);
    }
  };
}

import { Param } from '@nestjs/common';
/**
 * `uuid` parameter decorator to inject `uuid` from request url
 *
 * @group Parameter Decorators
 * @returns ParameterDecorator
 *
 */
export function ParamUuid(): ParameterDecorator {
  return (...args) => {
    Param('uuid')(...args);
  };
}

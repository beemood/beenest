import { Param } from '@nestjs/common';
/**
 * Inject `uuid` url param from request
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

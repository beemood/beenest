import { Param, ParseIntPipe } from '@nestjs/common';
/**
 * Inject `id` url param from request
 *
 * @group Parameter Decorators
 * @returns ParameterDecorator
 */
export function ParamId(): ParameterDecorator {
  return (...args) => {
    Param('id', ParseIntPipe)(...args);
  };
}

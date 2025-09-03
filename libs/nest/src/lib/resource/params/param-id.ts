import { Param, ParseIntPipe } from '@nestjs/common';
/**
 * `id` parameter decorator to inject `id` parameter from request url
 *
 * @group Parameter Decorators
 * @returns ParameterDecorator
 */
export function ParamId(): ParameterDecorator {
  return (...args) => {
    Param('id', ParseIntPipe)(...args);
  };
}

import { ParseIntPipe, Query } from '@nestjs/common';
/**
 * `skip` query parameter decorator to inject `skip` from request url
 *
 * @group Parameter Decorators
 * @returns ParameterDecorator
 *
 */
export function QuerySkip(): ParameterDecorator {
  return (...args) => {
    Query('skip', ParseIntPipe)(...args);
  };
}

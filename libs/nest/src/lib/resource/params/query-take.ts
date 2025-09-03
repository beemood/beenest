import { ParseIntPipe, Query } from '@nestjs/common';

/**
 * `take` query parameter decorator to inject `take` from request url
 *
 * @group Parameter Decorators
 * @returns ParameterDecorator
 *
 */
export function QueryTake(): ParameterDecorator {
  return (...args) => {
    Query('take', ParseIntPipe)(...args);
  };
}

import { ParseIntPipe, Query } from '@nestjs/common';

/**
 * Inject `take` query param from request
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

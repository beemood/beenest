import { ParseIntPipe, Query } from '@nestjs/common';
/**
 * Inject `skip` query param from request
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

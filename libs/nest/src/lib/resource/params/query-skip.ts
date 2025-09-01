import { ParseIntPipe, Query } from '@nestjs/common';
/**
 * Paginator skip parameter
 * @returns ParameterDecorator
 */
export function QuerySkip(): ParameterDecorator {
  return (...args) => {
    Query('skip', ParseIntPipe)(...args);
  };
}

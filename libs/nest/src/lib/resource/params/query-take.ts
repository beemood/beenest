import { ParseIntPipe, Query } from '@nestjs/common';

/**
 * Paginator take parameter
 * @returns ParameterDecorator
 */
export function QueryTake(): ParameterDecorator {
  return (...args) => {
    Query('take', ParseIntPipe)(...args);
  };
}

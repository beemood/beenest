import { Query } from '@nestjs/common';
/**
 * `orderDir` query parameter decorator to inject `orderDir` from request url
 *
 * @group Parameter Decorators
 * @returns ParameterDecorator
 *
 */
export function QueryOrderDir(): ParameterDecorator {
  return (...args) => {
    Query('orderDir')(...args);
  };
}

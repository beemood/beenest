import { Query } from '@nestjs/common';
/**
 * Inject `orderDir` query param from request
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

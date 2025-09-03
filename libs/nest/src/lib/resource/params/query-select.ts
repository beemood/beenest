import { Query } from '@nestjs/common';

/**
 * `select` query parameter decorator to inject `select` from request url
 *
 * @group Parameter Decorators
 * @returns ParameterDecorator
 *
 */
export function QuerySelect(): ParameterDecorator {
  return (...args) => {
    Query('select')(...args);
  };
}

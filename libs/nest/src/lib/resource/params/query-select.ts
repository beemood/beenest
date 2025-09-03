import { Query } from '@nestjs/common';

/**
 * Inject `select` query param from request
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

import { Query } from '@nestjs/common';
/**
 * `where` query parameter decorator to inject `where` from request url
 *
 * @group Parameter Decorators
 * @returns ParameterDecorator
 *
 */
export function QuerySearch(): ParameterDecorator {
  return (...args) => {
    Query('where')(...args);
  };
}

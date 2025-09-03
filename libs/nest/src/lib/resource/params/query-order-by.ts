import { Query } from '@nestjs/common';
/**
 * `orderBy` query parameter decorator to inject `orderBy` from request url
 *
 * @group Parameter Decorators
 * @returns ParameterDecorator
 *
 */
export function QueryOrderBy(): ParameterDecorator {
  return (...args) => {
    Query('orderBy')(...args);
  };
}

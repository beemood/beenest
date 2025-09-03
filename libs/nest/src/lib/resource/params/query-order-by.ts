import { Query } from '@nestjs/common';
/**
 * Inject `orderBy` query param from request
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

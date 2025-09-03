import { Query } from '@nestjs/common';
/**
 * Inject `where` query param from request
 *
 * @group Parameter Decorators
 * @returns ParameterDecorator
 *
 */
export function QueryWhere(): ParameterDecorator {
  return (...args) => {
    Query('where')(...args);
  };
}

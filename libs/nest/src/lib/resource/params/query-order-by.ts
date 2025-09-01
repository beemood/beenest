import { Query } from '@nestjs/common';
/**
 * Order by field query param
 * @returns ParameterDecorator
 */
export function QueryOrderBy(): ParameterDecorator {
  return (...args) => {
    Query('orderBy')(...args);
  };
}

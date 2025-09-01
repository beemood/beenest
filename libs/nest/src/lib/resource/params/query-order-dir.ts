import { Query } from '@nestjs/common';
/**
 * Order by field query param
 * @returns ParameterDecorator
 */
export function QueryOrderDir(): ParameterDecorator {
  return (...args) => {
    Query('orderDir')(...args);
  };
}

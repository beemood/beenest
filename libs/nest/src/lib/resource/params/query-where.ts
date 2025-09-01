import { Query } from '@nestjs/common';
/**
 * Query search parameter
 * @returns ParameterDecorator
 */
export function QuerySearch(): ParameterDecorator {
  return (...args) => {
    Query('search')(...args);
  };
}

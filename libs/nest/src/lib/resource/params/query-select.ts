import { Query } from '@nestjs/common';

/**
 * Paginator take parameter
 * @returns ParameterDecorator
 */
export function QuerySelect(): ParameterDecorator {
  return (...args) => {
    const fields = (args[0] as any).fields;

    console.log('QuerySelect: ', fields);
    Query('select')(...args);
  };
}

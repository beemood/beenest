import { Query as __Query } from '@nestjs/common';
import { type ZodType } from 'zod';
/**
 * Inject request query
 *
 * @group Parameter Decorators
 * @param schema Zod schema
 * @returns
 */
export function Query(schema?: ZodType): ParameterDecorator {
  return (...args) => {
    __Query({
      transform(value) {
        if (schema) {
          return schema.parse(value);
        }
        return value;
      },
    })(...args);
  };
}

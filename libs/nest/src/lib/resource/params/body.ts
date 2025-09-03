import { Body as __Body } from '@nestjs/common';
import { ZodType } from 'zod';
/**
 * Inject `body` from request
 *
 * @group Parameter Decorators
 * @param schema Zod schema
 * @returns ParameterDecorator
 *
 */
export function Body(schema?: ZodType): ParameterDecorator {
  return (...args) => {
    __Body({
      transform(value) {
        if (schema) {
          return schema.parse(value);
        }
        return value;
      },
    })(...args);
  };
}

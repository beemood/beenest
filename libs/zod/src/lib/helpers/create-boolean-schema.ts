import {
  EmptyArrayError,
  EmptyStringError,
  isEmptyString,
  parseJsonOrParam,
} from '@beenest/utils';
import z, { ZodBoolean } from 'zod';

/**
 * Create an object schema from {@link fields} that parses objects like `Record<string,boolean>`
 *
 * @group Zod
 * @param fields model fields
 * @returns Zod object scheme
 *
 * @example
 *
 * ```ts
 *    const SelectCategorySchema = createBooleanSchema(['id', 'name'])
 *
 *    SelectCategorySchema.parse({ id: true })       // returns: { id: true}
 *    SelectCategorySchema.parse('{ "id": true }')   // returns: { id: true}
 *
 *    SelectCategorySchema.parse('{ "id": 1 }')      // throws: ZodError
 *
 * ```
 */
export function createBooleanSchema<T extends object>(
  fields: (keyof T)[] & string[]
) {
  if (fields.length == 0) {
    throw new EmptyArrayError('fields are empty');
  }

  if (fields.length == 0) {
    throw new EmptyArrayError('fields are empty');
  }

  const emptyIndex = fields.findIndex(isEmptyString);

  if (emptyIndex > -1) {
    throw new EmptyStringError(`The field at the index ${emptyIndex} is empty`);
  }

  return z
    .preprocess(
      parseJsonOrParam,
      z
        .object({
          ...fields.reduce((p, c) => {
            return { ...p, [c]: z.boolean().optional() };
          }, {}),
        } as Record<keyof T, ZodBoolean>)
        .partial()
        .optional()
    )
    .nullable();
}

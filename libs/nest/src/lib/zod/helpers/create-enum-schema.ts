import { parseJsonOrParam } from '@beenest/utils';
import z, { ZodLiteral } from 'zod';
/**
 * Create an object schema from the {@link fields} and {@link enums} that parses object like Record<fieldsType, enumdsType>
 *
 * @group Zod
 * @param fields list of string
 * @param enums list of string values to be used as enum
 * @returns Zod literal schema
 *
 *
 * @example
 * ```ts
 *
 *    const OrderCategorySchema = createEnumSchema(['id', 'name'], ['asc', 'desc'])
 *
 *    OrderCategorySchema.parse({ id: 'asc'})       // returns: {id: 'asc'}
 *    OrderCategorySchema.parse('{ "id": "asc"}')   // returns: {id: 'asc'}
 *
 *    OrderCategorySchema.parse('{ "id": "unkown"}')   // throws: ZodError
 *
 * ```
 */
export function createEnumSchema<T extends object, L extends string>(
  fields: (keyof T)[],
  enums: L[]
) {
  return z.preprocess(
    parseJsonOrParam,
    z
      .object({
        ...fields.reduce((p, c) => {
          return { ...p, [c]: z.literal(enums) };
        }, {}),
      } as Record<keyof T, ZodLiteral<L>>)
      .partial()
      .optional()
  );
}

import { createEnumSchema } from './create-enum-schema.js';

/**
 * Create an object schema from {@link fields} and enums values ['asc', 'desc' ] using {@link createEnumSchema }.
 * @see {@link createEnumSchema}
 *
 * @group Zod
 * @param fields list of string
 * @returns zod object schema
 *
 *
 * @example
 * ```ts
 *
 *    const OrderCategorySchema = createOrderBySchema(['id', 'name'])
 *
 *    OrderCategorySchema.parse({ id: 'asc'})       // returns: {id: 'asc'}
 *    OrderCategorySchema.parse('{ "id": "asc"}')   // returns: {id: 'asc'}
 *
 *    OrderCategorySchema.parse('{ "id": "unkown"}')   // throws: ZodError
 *
 * ```
 */
export function createOrderBySchema(fields: string[]) {
  return createEnumSchema(fields, ['asc', 'desc']);
}

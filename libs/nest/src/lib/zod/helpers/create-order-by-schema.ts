import { createEnumSchema } from './create-enum-schema.js';

/**
 * Create a object schema, {[key:string]:'asc' | 'desc'}, ( accept json value)
 *
 * @group Zod
 * @param fields list of string
 * @returns zod object schema
 */
export function createOrderBySchema(fields: string[]) {
  return createEnumSchema(fields, ['asc', 'desc']);
}

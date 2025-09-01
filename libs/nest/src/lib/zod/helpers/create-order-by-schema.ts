import { createEnumSchema } from './create-enum-schema.js';

/**
 * Create a object schema, {[key:string]:'asc' | 'desc'}, ( accept json value)
 * @param fields list of string
 * @returns zod schema
 */
export function createOrderBySchema(fields: string[]) {
  return createEnumSchema(fields, ['asc', 'desc']);
}

import { parseJsonOrParam } from '@beenest/utils';
import z, { ZodLiteral } from 'zod';
/**
 * Create a literal value record such as {[key:string] : value } ( accept json value )
 *
 * @group Zod
 * @param fields list of string
 * @param enums list of string values to be used as enum
 * @returns Zod literal schema
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

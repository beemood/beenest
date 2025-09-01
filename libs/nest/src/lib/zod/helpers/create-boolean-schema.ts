import { parseJson } from '@beenest/utils';
import z, { ZodBoolean } from 'zod';

/**
 * Create boolean record schema from the given fields. ( accepts json value )s
 * @param fields model fields
 * @returns Zod
 */
export function createBooleanSchema<T extends object>(fields: (keyof T)[]) {
  return z
    .preprocess(
      parseJson,
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

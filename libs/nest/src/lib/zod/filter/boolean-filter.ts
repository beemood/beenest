import z from 'zod';
import { booleanStringSchema } from '../literals/literals.js';

/**
 * @group Zod
 */
export const __BooleanFilterObject = {
  equals: booleanStringSchema(),
};

/**
 * @group Zod
 */
export const BooleanFilterObject = {
  ...__BooleanFilterObject,
  not: z.object(__BooleanFilterObject),
};

/**
 * @group Zod
 */
export const BooleanFilterSchema = z
  .object(BooleanFilterObject)
  .partial()
  .optional();

export type BooleanFilter = z.infer<typeof BooleanFilterSchema>;

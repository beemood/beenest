import z from 'zod';
import { booleanStringSchema } from '../literals/literals.js';

/**
 * @group Zod
 */
const __BooleanFilterObject = {
  equals: booleanStringSchema(),
};

/**
 * @group Zod
 */
const BooleanFilterObject = {
  ...__BooleanFilterObject,
  not: z.object(__BooleanFilterObject),
};

/**
 * @group Zod
 */
export const booleanFilterSchema = z
  .object(BooleanFilterObject)
  .partial()
  .optional();

export type BooleanFilter = z.infer<typeof booleanFilterSchema>;

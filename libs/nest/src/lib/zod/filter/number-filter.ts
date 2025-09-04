import z from 'zod';
import { numberStringSchema } from '../literals/literals.js';
/**
 * @group Zod
 */
export const __NumberFilterObject = {
  equals: numberStringSchema(),
  in: numberStringSchema().array(),
  notIn: numberStringSchema().array(),
  lt: numberStringSchema(),
  lte: numberStringSchema(),
  gt: numberStringSchema(),
  gte: numberStringSchema(),
};

/**
 * @group Zod
 */
export const NumberFilterObject = {
  ...__NumberFilterObject,
  not: z.object(__NumberFilterObject),
};

/**
 * @group Zod
 */
export const NumberFilterSchema = z
  .object(NumberFilterObject)
  .partial()
  .optional();

export type NumberFilter = z.infer<typeof NumberFilterSchema>;

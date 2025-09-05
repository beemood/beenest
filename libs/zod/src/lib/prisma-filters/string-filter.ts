import z from 'zod';
import { stringSchema } from '../literals/literals.js';

/**
 * @group Zod
 */
const __StringFilterObject = {
  equals: stringSchema(),
  in: stringSchema().array(),
  notIn: stringSchema().array(),
  lt: stringSchema(),
  lte: stringSchema(),
  gt: stringSchema(),
  gte: stringSchema(),
  contains: stringSchema(),
  startsWith: stringSchema(),
  endsWith: stringSchema(),
};

/**
 * @group Zod
 */
const StringFilterObject = {
  ...__StringFilterObject,
  not: z.object(__StringFilterObject),
};

/**
 * @group Zod
 */
export const stringFilterSchema = z
  .object(StringFilterObject)
  .partial()
  .optional();

export type StringFilter = z.infer<typeof stringFilterSchema>;

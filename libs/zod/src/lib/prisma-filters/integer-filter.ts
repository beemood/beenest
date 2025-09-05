import z from 'zod';
import { integerStringSchema } from '../literals/literals.js';

/**
 * @group Zod
 */
const __IntegerFilterObject = {
  equals: integerStringSchema(),
  in: integerStringSchema().array(),
  notIn: integerStringSchema().array(),
  lt: integerStringSchema(),
  lte: integerStringSchema(),
  gt: integerStringSchema(),
  gte: integerStringSchema(),
};

/**
 * @group Zod
 */
const IntegerFilterObject = {
  ...__IntegerFilterObject,
  not: z.object(__IntegerFilterObject),
};

/**
 * @group Zod
 */
export const integerFilterSchema = z
  .object(IntegerFilterObject)
  .partial()
  .optional();

export type IntegerFilter = z.infer<typeof integerFilterSchema>;

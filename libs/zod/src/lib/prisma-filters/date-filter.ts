import z from 'zod';
import { dateSchema } from '../literals/literals.js';

/**
 * @group Zod
 */
const __DateFilterObject = {
  equals: dateSchema(),
  in: dateSchema().array(),
  notIn: dateSchema().array(),
  lt: dateSchema(),
  lte: dateSchema(),
  gt: dateSchema(),
  gte: dateSchema(),
};

/**
 * @group Zod
 */
const DateFilterObject = {
  ...__DateFilterObject,
  not: z.object(__DateFilterObject),
};

/**
 * @group Zod
 */
export const dateFilterSchema = z.object(DateFilterObject).partial().optional();

export type DateFilter = z.infer<typeof dateFilterSchema>;

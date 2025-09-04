import z from 'zod';
import { dateSchema } from '../literals/literals.js';

/**
 * @group Zod
 */
export const __DateFilterObject = {
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
export const DateFilterObject = {
  ...__DateFilterObject,
  not: z.object(__DateFilterObject),
};

/**
 * @group Zod
 */
export const DateFilterSchema = z.object(DateFilterObject).partial().optional();

export type DateFilter = z.infer<typeof DateFilterSchema>;

import z from 'zod';

/**
 * @group Zod
 */
export const __IntegerFilterObject = {
  equals: z.int(),
  in: z.int().array(),
  notIn: z.int().array(),
  lt: z.int(),
  lte: z.int(),
  gt: z.int(),
  gte: z.int(),
};

/**
 * @group Zod
 */
export const IntegerFilterObject = {
  ...__IntegerFilterObject,
  not: __IntegerFilterObject,
};

/**
 * @group Zod
 */
export const IntegerFilterSchema = z
  .object(IntegerFilterObject)
  .partial()
  .optional();

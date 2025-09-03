import z from 'zod';
/**
 * @group Zod
 */
export const __NumberFilterObject = {
  equals: z.number(),
  in: z.number().array(),
  notIn: z.number().array(),
  lt: z.number(),
  lte: z.number(),
  gt: z.number(),
  gte: z.number(),
};

/**
 * @group Zod
 */
export const NumberFilterObject = {
  ...__NumberFilterObject,
  not: __NumberFilterObject,
};

/**
 * @group Zod
 */
export const NumberFilterSchema = z
  .object(NumberFilterObject)
  .partial()
  .optional();

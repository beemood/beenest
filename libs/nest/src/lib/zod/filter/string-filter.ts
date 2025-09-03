import z from 'zod';

/**
 * @group Zod
 */
export const __StringFilterObject = {
  equals: z.string(),
  in: z.string().array(),
  notIn: z.string().array(),
  lt: z.string(),
  lte: z.string(),
  gt: z.string(),
  gte: z.string(),
  contains: z.string(),
  startsWith: z.string(),
  endsWith: z.string(),
};

/**
 * @group Zod
 */
export const StringFilterObject = {
  ...__StringFilterObject,
  not: __StringFilterObject,
};

/**
 * @group Zod
 */
export const StringFilterSchema = z
  .object(StringFilterObject)
  .partial()
  .optional();

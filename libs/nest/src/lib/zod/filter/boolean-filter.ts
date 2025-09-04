import z from 'zod';

/**
 * @group Zod
 */
export const __BooleanFilterObject = {
  equals: z.boolean(),
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

import z from 'zod';
/**
 * @group Zod
 */
export const __NumberFilterObject = {
  equal: z.number(),
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

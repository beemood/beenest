import z from 'zod';

/**
 * @group Zod
 */
export const __StringFilterObject = {
  equal: z.string(),
  startsWith: z.string(),
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

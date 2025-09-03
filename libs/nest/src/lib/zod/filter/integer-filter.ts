import z from 'zod';

/**
 * @group Zod
 */
export const __IntegerFilterObject = {
  equal: z.int(),
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

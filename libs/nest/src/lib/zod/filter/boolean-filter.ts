import z from 'zod';

export const __BooleanFilterObject = {
  equal: z.boolean(),
};

export const BooleanFilterObject = {
  ...__BooleanFilterObject,
  not: __BooleanFilterObject,
};

export const BooleanFilterSchema = z
  .object(BooleanFilterObject)
  .partial()
  .optional();

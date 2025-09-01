import z from 'zod';

export const __NumberFilterObject = {
  equal: z.number(),
};

export const NumberFilterObject = {
  ...__NumberFilterObject,
  not: __NumberFilterObject,
};

export const NumberFilterSchema = z
  .object(NumberFilterObject)
  .partial()
  .optional();

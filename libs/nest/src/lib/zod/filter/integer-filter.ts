import z from 'zod';

export const __IntegerFilterObject = {
  equal: z.int(),
};

export const IntegerFilterObject = {
  ...__IntegerFilterObject,
  not: __IntegerFilterObject,
};

export const IntegerFilterSchema = z
  .object(IntegerFilterObject)
  .partial()
  .optional();

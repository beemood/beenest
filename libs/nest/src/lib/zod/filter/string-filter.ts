import z from 'zod';

export const __StringFilterObject = {
  equal: z.string(),
  startsWith: z.string(),
};

export const StringFilterObject = {
  ...__StringFilterObject,
  not: __StringFilterObject,
};

export const StringFilterSchema = z
  .object(StringFilterObject)
  .partial()
  .optional();

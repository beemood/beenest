import z from 'zod';

/**
 * @group Zod
 */
const __IntegerFilterObject = {
  equals: z.coerce.number().int(),
  in: z.coerce.number().int().array(),
  notIn: z.coerce.number().int().array(),
  lt: z.coerce.number().int(),
  lte: z.coerce.number().int(),
  gt: z.coerce.number().int(),
  gte: z.coerce.number().int(),
};

/**
 * @group Zod
 */
const IntegerFilterObject = {
  ...__IntegerFilterObject,
  not: z.object(__IntegerFilterObject),
};

/**
 * @group Zod
 */
export const integerFilterSchema = z.object(IntegerFilterObject).partial();

export type IntegerFilter = z.infer<typeof integerFilterSchema>;

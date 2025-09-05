import z from 'zod';

/**
 * @group Zod
 */
const __StringFilterObject = {
  equals: z.coerce.string(),
  in: z.coerce.string().array(),
  notIn: z.coerce.string().array(),
  lt: z.coerce.string(),
  lte: z.coerce.string(),
  gt: z.coerce.string(),
  gte: z.coerce.string(),
  contains: z.coerce.string(),
  startsWith: z.coerce.string(),
  endsWith: z.coerce.string(),
};

/**
 * @group Zod
 */
const StringFilterObject = {
  ...__StringFilterObject,
  not: z.object(__StringFilterObject),
};

/**
 * @group Zod
 */
export const stringFilterSchema = z.object(StringFilterObject).partial();

export type StringFilter = z.infer<typeof stringFilterSchema>;

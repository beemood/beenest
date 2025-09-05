import z from 'zod';

/**
 * @group Zod
 */
const __BooleanFilterObject = {
  equals: z.coerce.boolean(),
};

/**
 * @group Zod
 */
const BooleanFilterObject = {
  ...__BooleanFilterObject,
  not: z.object(__BooleanFilterObject),
};

/**
 * @group Zod
 */
export const booleanFilterSchema = z.object(BooleanFilterObject).partial();

export type BooleanFilter = z.infer<typeof booleanFilterSchema>;

import z from 'zod';
/**
 * @group Zod
 */
const __NumberFilterObject = {
  equals: z.coerce.number(),
  in: z.coerce.number().array(),
  notIn: z.coerce.number().array(),
  lt: z.coerce.number(),
  lte: z.coerce.number(),
  gt: z.coerce.number(),
  gte: z.coerce.number(),
};

/**
 * @group Zod
 */
const NumberFilterObject = {
  ...__NumberFilterObject,
  not: z.object(__NumberFilterObject),
};

/**
 * @group Zod
 */
export const numberFilterSchema = z.object(NumberFilterObject).partial();

export type NumberFilter = z.infer<typeof numberFilterSchema>;

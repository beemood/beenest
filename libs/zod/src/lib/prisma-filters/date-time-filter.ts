import z from 'zod';

/**
 * @group Zod
 */
const __DateTimeFilterObject = {
  equals: z.iso.datetime(),
  in: z.iso.datetime().array(),
  notIn: z.iso.datetime().array(),
  lt: z.iso.datetime(),
  lte: z.iso.datetime(),
  gt: z.iso.datetime(),
  gte: z.iso.datetime(),
};

/**
 * @group Zod
 */
const DateTimeFilterObject = {
  ...__DateTimeFilterObject,
  not: z.object(__DateTimeFilterObject),
};

/**
 * @group Zod
 */
export const dateFilterSchema = z.object(DateTimeFilterObject).partial();

export type DateTimeFilter = z.infer<typeof dateFilterSchema>;

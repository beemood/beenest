import z from 'zod';

/**
 * @group Zod
 */
export const __DateFilterObject = {
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
export const DateFilterObject = {
  ...__DateFilterObject,
  not: __DateFilterObject,
};

/**
 * @group Zod
 */
export const DateFilterSchema = z.object(DateFilterObject).partial().optional();

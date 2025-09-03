import z from 'zod';

/**
 * @group Zod
 */
export const __DateFilterObject = {
  equal: z.iso.datetime(),
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

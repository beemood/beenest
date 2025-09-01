import z from 'zod';

export const __DateFilterObject = {
  equal: z.iso.datetime(),
};

export const DateFilterObject = {
  ...__DateFilterObject,
  not: __DateFilterObject,
};

export const DateFilterSchema = z.object(DateFilterObject).partial().optional();

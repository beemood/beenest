import z from 'zod';

export const NameSchema = z.string().min(2).max(30);

export const PositiveIntegerSchema = z.preprocess(
  (value: any) => parseInt(value),
  z.int().min(0)
);

export const OrderDirectionSchema = z.literal(['asc', 'desc']);

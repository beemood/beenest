import { parseIntOrParam } from '@beenest/utils';
import z from 'zod';

/**
 * @group Zod
 */
export const NameSchema = z.string().min(2).max(30);

/**
 * @group Zod
 */
export const PositiveIntegerSchema = z.preprocess(
  parseIntOrParam,
  z.int().min(0)
);

/**
 * @group Zod
 */
export const OrderDirectionSchema = z.literal(['asc', 'desc']);

import { parseJsonOrParam } from '@beenest/utils';
import z from 'zod';
import { PositiveIntegerSchema } from '../literals/literals.js';

/**
 * @group Zod
 */
export const PageObject = {
  take: PositiveIntegerSchema,
  skip: PositiveIntegerSchema,
};

/**
 * @group Zod
 */
export const PageSchema = z.preprocess(
  parseJsonOrParam,
  z.object(PageObject).partial().optional()
);

/**
 * @group Zod
 */
export type Page = z.infer<typeof PageSchema>;

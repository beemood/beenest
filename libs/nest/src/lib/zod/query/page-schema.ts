import { parseJsonOrParam } from '@beenest/utils';
import z from 'zod';
import { PositiveIntegerSchema } from '../literals/literals.js';

export const PageObject = {
  take: PositiveIntegerSchema,
  skip: PositiveIntegerSchema,
};

export const PageSchema = z.preprocess(
  parseJsonOrParam,
  z.object(PageObject).partial().optional()
);

export type Page = z.infer<typeof PageSchema>;

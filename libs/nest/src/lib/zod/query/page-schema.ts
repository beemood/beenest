import { parseJson } from '@beenest/utils';
import z from 'zod';
import { PositiveIntegerSchema } from '../literals/literals.js';

export const PageObject = {
  take: PositiveIntegerSchema,
  skip: PositiveIntegerSchema,
};

export const PageSchema = z.preprocess(
  parseJson,
  z.object(PageObject).partial().optional()
);

export type Page = z.infer<typeof PageSchema>;

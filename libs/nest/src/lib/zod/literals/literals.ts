import { parseJsonOrReturn, toParamFunction, trim } from '@beenest/utils';
import z, { literal, preprocess } from 'zod';

export const stringSchema = () => z.string({ error: 'must be string' });

export const numberSchema = () => z.number({ error: 'must be number' });
export const integerSchema = () => z.int({ error: 'must be integer' });
export const booleanSchema = () => z.boolean({ error: 'must be boolean' });
export const dateSchema = () => z.iso.datetime({ error: 'must be date' });

export const numberStringSchema = () =>
  preprocess(parseJsonOrReturn, numberSchema());

export const integerStringSchema = () =>
  preprocess(parseJsonOrReturn, integerSchema());

export const booleanStringSchema = () =>
  preprocess(parseJsonOrReturn, booleanSchema());

/**
 * @group Zod
 */
export const nameSchema = () =>
  preprocess(
    toParamFunction(trim),
    stringSchema()
      .regex(/^[-_a-zA-Z\s]+$/, {
        error: 'must contain only space, letters, underscore, and dash',
      })
      .min(2, { error: 'must be at least 2 characters long' })
      .max(30, { error: 'cannot exceed 30 characters' })
  );

/**
 * @group Zod
 */
export const descriptionSchema = () =>
  z
    .preprocess(
      toParamFunction(trim),
      stringSchema()
        .max(1000, { error: 'cannot exceed 1000 characters' })
        .optional()
    )
    .optional();

/**
 * @group Zod
 */
export const positiveIntegerSchema = () =>
  preprocess(
    toParamFunction(parseFloat),
    integerSchema().positive({ error: 'must be positive' })
  );

/**
 * @group Zod
 */
export const positiveNumberSchema = () =>
  preprocess(
    toParamFunction(parseFloat),
    z
      .number({ error: 'must be number' })
      .positive({ error: 'must be positive' })
  );

/**
 * @group Zod
 */
export const currencySchema = positiveNumberSchema;

/**
 * @group Zod
 */
export const idSchema = positiveIntegerSchema;

/**
 * @group Zod
 */
export const quantitySchema = positiveIntegerSchema;

/**
 * @group Zod
 */
export const orderDirectionSchema = () =>
  preprocess(toParamFunction(trim), literal(['asc', 'desc']));

/**
 * @group Zod
 */
export const barcodeSchema = () =>
  preprocess(
    toParamFunction(trim),
    z
      .string()
      .regex(/^\d+$/, 'must contain only digits')
      .min(8, { error: 'must be at least 8 digits' })
      .max(13, { error: 'cannot exceed 13 digits' })
  );

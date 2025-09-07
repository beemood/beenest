import * as z from 'zod';

export const passwordSchema = z
  .string()
  .regex(/[A-Z]{1,}/, { error: 'must contain an uppercase letter' })
  .regex(/[a-z]{1,}/, { error: 'must contain a lowercase letter' })
  .regex(/\d{1,}/, { error: 'must contain a digit' })
  .regex(/[~!@#$%^&*()_+]/, { error: 'must contain a special character' })
  .min(6, { error: 'must be at least 6 characters long' })
  .register(z.globalRegistry, {
    id: 'password',
    title: 'Password',
    description:
      'Strong password that must be at least 6 characters long including an uppercase, lowercase, digit, and special character.',
    examples: ['!Password123'],
  });

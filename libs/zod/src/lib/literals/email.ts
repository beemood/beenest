import * as z from 'zod';

export const emailSchema = z
  .email({ error: 'must be a valid email address' })
  .register(z.globalRegistry, {
    id: 'email',
    title: 'Email address',
    description: 'Your email address',
    examples: ['first.last@example.com'],
  });

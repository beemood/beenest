import * as z from 'zod';

export const emailSchema = z.email().register(z.globalRegistry, {
  id: 'email',
  title: 'Email address',
  description: 'Your email address',
  examples: ['first.last@example.com'],
});

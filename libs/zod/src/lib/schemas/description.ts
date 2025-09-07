import * as z from 'zod';

export const descriptionSchema = z
  .string()
  .max(400, { error: 'must not exceed 400 characters' })
  .register(z.globalRegistry, {
    id: 'description',
    title: 'Description',
    description: 'Any kind of description that at most 400 characters long',
    examples: [
      'This is a description exasmple. A description must not be more than 400 characters.',
    ],
  });

import z from 'zod';
import { descriptionSchema } from './description.js';

export const commentSchema = descriptionSchema
  .clone()
  .register(z.globalRegistry, {
    id: 'comment',
    title: 'Comment',
    description: 'Comment',
  });

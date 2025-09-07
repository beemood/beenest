import * as z from 'zod';
import { firstNameSchema } from './first-name.js';

export const lastName = firstNameSchema.clone().register(z.globalRegistry, {
  id: 'lastName',
  title: 'Last name',
  description: 'Last name',
  examples: ['Brightline', 'King', 'Hunter'],
});

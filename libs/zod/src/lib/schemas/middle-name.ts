import * as z from 'zod';
import { firstNameSchema } from './first-name.js';

export const middleName = firstNameSchema.clone().register(z.globalRegistry, {
  id: 'middleName',
  title: 'Middle Name',
  description: 'Middle name',
  examples: ['Brightline', 'King', 'Hunter'],
});

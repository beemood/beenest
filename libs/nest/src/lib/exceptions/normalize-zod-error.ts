import { UnprocessableEntityException } from '@nestjs/common';
import { type ZodError } from 'zod';

export function normalizeZodError(exception: ZodError) {
  return new UnprocessableEntityException({
    errors: exception.issues,
  });
}

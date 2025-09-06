import {
  type ArgumentsHost,
  Catch,
  type ExceptionFilter,
} from '@nestjs/common';
import { ZodError } from 'zod';
import { normalizeZodError } from './normalize-zod-error.js';

/**
 * Catch Zod validation errors and convert them into nestjs UnprocessableEntityException and throw it.
 *
 * @group Errors
 */
@Catch(ZodError)
export class ZodExceptionFilter implements ExceptionFilter {
  catch(exception: ZodError, host: ArgumentsHost) {
    throw normalizeZodError(exception);
  }
}

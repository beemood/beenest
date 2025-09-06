import {
    type ArgumentsHost,
    Catch,
    type ExceptionFilter,
} from '@nestjs/common';
import { ZodError } from 'zod';
import { normalizePrismaError } from './normalize-prisma-error.js';
import { normalizeZodError } from './normalize-zod-error.js';

@Catch()
export class CommonExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    if (exception.name == ZodError.name) {
      throw normalizeZodError(exception);
    }

    if (exception.name === 'PrismaClientKnownRequestError') {
      throw normalizePrismaError(exception);
    }

    throw exception;
  }
}

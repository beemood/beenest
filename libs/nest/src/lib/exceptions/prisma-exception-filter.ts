import {
  type ArgumentsHost,
  Catch,
  type ExceptionFilter,
} from '@nestjs/common';
import { normalizePrismaError } from './normalize-prisma-error.js';

@Catch()
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    if (exception.name === 'PrismaClientKnownRequestError') {
      const normal = normalizePrismaError(exception);

      if (normal) {
        throw normal;
      }
    }

    throw exception;
  }
}

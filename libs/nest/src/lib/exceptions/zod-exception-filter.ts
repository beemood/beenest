import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    UnprocessableEntityException,
} from '@nestjs/common';
import { ZodError } from 'zod';

@Catch(ZodError)
export class ZodExceptionFilter implements ExceptionFilter {
  catch(exception: ZodError, host: ArgumentsHost) {
    throw new UnprocessableEntityException({
      errors: JSON.parse(exception.message),
    });
  }
}

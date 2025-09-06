import { UnprocessableEntityException } from '@nestjs/common';

/**
 * Convert prisma errors into nestjs exceptions and throw it.
 * @param exception PrismaError
 */
export function normalizePrismaError(exception: any) {
  if (exception.code === 'P2002') {
    return new UnprocessableEntityException({
      errors: [
        {
          origin: 'string',
          code: 'unique',
          path: exception.meta?.target,
          message: `must be unique`,
        },
      ],
    });
  }
  return null;
}

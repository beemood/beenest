import {
  InternalServerErrorException,
  UnprocessableEntityException,
} from '@nestjs/common';

/**
 * Convert prisma errors into nestjs exceptions and throw it.
 * @param error
 */
export function normalizePrismaError(error: any) {
  if (error.code === 'P2002') {
    throw new UnprocessableEntityException({
      errors: [
        {
          origin: 'string',
          code: 'unique',
          path: error.meta?.target,
          message: `must be unique`,
        },
      ],
    });
  }
  throw new InternalServerErrorException('Unkown database operation error');
}

import { ApiQuery } from '@nestjs/swagger';
/**
 * Swagger doc for `orderBy` query param
 *
 * @group Swagger
 * @returns MethodDecorator
 */
export function OrderByParams(): MethodDecorator {
  return (...args) => {
    ApiQuery({
      name: 'orderBy',
      type: 'object',
      properties: {},
      required: false,
    })(...args);
  };
}

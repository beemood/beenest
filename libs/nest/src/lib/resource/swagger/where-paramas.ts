import { ApiQuery } from '@nestjs/swagger';
/**
 * Swagger doc for `where` query param
 *
 * @group Swagger
 * @returns MethodDecorator
 */
export function WhereParams(): MethodDecorator {
  return (...args) => {
    ApiQuery({
      name: 'where',
      type: 'object',
      properties: {},
      required: false,
    })(...args);
  };
}

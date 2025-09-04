import { ApiQuery } from '@nestjs/swagger';
/**
 * Define `orderBy` object query param
 *
 * @group Swagger
 * @returns MethodDecorator
 */
export function PaginatorParams(): MethodDecorator {
  return (...args) => {
    ApiQuery({
      name: 'take',
      description: 'Limit number of items',
      type: 'integer',
      minimum: 0,
      default: 2,
      required: false,
    })(...args);

    ApiQuery({
      name: 'skip',
      description: 'Skip the number of items',
      type: 'integer',
      minimum: 0,
      default: 1,
      required: false,
    })(...args);
  };
}

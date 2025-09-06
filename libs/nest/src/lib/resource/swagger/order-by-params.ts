import { ApiQuery } from '@nestjs/swagger';

/**
 * Define `orderBy` object query param
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
      examples: {
        Empty: {
          value: {},
        },
        'Order by id descendingly': {
          value: {
            orderBy: {
              id: 'desc',
            },
          },
        },
      },
    })(...args);
  };
}

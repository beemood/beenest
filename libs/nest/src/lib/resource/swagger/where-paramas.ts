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
      examples: {
        Empty: {
          value: {},
        },
        'Query items by id': {
          value: {
            where: {
              id: { gt: 0 },
            },
          },
        },
      },
    })(...args);
  };
}

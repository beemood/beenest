import { ApiQuery } from '@nestjs/swagger';

/**
 * Swagger doc for `select`, `omit`, and `include` query param
 *
 * @group Swagger
 * @returns MethodDecorator
 */
export function SelectParams(): MethodDecorator {
  return (...args) => {
    ApiQuery({
      name: 'select',
      description: 'Select properties',
      type: 'object',
      properties: {},
      required: false,
      examples: {
        Empty: {
          value: {},
        },
        'Select id field': {
          value: {
            select: {
              id: true,
            },
          },
        },
      },
    })(...args);

    ApiQuery({
      name: 'omit',
      description: 'Omit properties',
      type: 'object',
      properties: {},
      required: false,
      examples: {
        Empty: {
          value: {},
        },
        'Omit id field': {
          value: {
            omit: {
              id: true,
            },
          },
        },
      },
    })(...args);

    ApiQuery({
      name: 'include',
      description: 'Include relations',
      type: 'object',
      properties: {},
      required: false,
      examples: {
        Empty: {
          value: {},
        },
        'Include category relation and select id field': {
          value: {
            include: {
              category: {
                select: { id: true },
              },
            },
          },
        },
      },
    })(...args);
  };
}

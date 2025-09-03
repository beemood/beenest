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
    })(...args);

    ApiQuery({
      name: 'omit',
      description: 'Omit properties',
      type: 'object',
      properties: {},
      required: false,
    })(...args);

    ApiQuery({
      name: 'include',
      description: 'Include relations',
      type: 'object',
      properties: {},
      required: false,
    })(...args);
  };
}

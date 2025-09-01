import { ApiQuery } from '@nestjs/swagger';

/**
 * Optional select query params
 * @returns
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

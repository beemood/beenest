import { ApiQuery } from '@nestjs/swagger';

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

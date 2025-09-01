import { ApiQuery } from '@nestjs/swagger';

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

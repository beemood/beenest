import { ApiQuery } from '@nestjs/swagger';

export function PaginatorParams(): MethodDecorator {
  return (...args) => {
    ApiQuery({
      name: 'take',
      description: 'Limit number of items',
      type: 'integer',
      minimum: 0,
      default: 20,
      required: false,
    })(...args);

    ApiQuery({
      name: 'skip',
      description: 'Skip the number of items',
      type: 'integer',
      minimum: 0,
      default: 20,
      required: false,
    })(...args);
  };
}

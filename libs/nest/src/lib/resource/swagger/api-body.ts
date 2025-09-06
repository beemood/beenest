import { ApiBody } from '@nestjs/swagger';

export function ObjectApiBody(): MethodDecorator {
  return (...args) => {
    ApiBody({
      schema: { properties: {} },
      examples: {
        Empty: { value: {} },
        'Sample input': { value: { name: 'some' } },
      },
    })(...args);
  };
}

export function ArrayApiBody(): MethodDecorator {
  return (...args) => {
    ApiBody({
      isArray: true,
      schema: { properties: {} },
      examples: {
        Empty: {
          value: [],
        },
        'Sample input': {
          value: [{ value: { name: 'Sample' } }],
        },
      },
    })(...args);
  };
}

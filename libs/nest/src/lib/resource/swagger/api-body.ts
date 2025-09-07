import { ApiBody, type ApiBodyOptions } from '@nestjs/swagger';

export function ObjectApiBody(options?: ApiBodyOptions): MethodDecorator {
  return (...args) => {
    options = options ?? {
      type: 'object',
      examples: {
        Empty: { value: {} },
        'Sample input': { value: { name: 'some' } },
      },
    };
    ApiBody(options)(...args);
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

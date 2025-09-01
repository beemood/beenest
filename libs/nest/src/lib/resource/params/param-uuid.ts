import { Param } from '@nestjs/common';

export function ParamUuid(): ParameterDecorator {
  return (...args) => {
    Param('uuid')(...args);
  };
}

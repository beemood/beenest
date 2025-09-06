import { isResourceNameOrThrow } from '@beenest/utils';
import { Injectable } from '@nestjs/common';

export function EventListener(): ClassDecorator {
  return (...args) => {
    const className = args[0].name;

    isResourceNameOrThrow(className);

    Injectable()(...args);
  };
}

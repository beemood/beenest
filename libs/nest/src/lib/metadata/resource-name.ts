import { getResourceName as __getResourceName } from '@beenest/utils';
import { ExecutionContext, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export const RESOURCE_NAME_METADATA = Symbol('RESOURCE_NAME_METADATA');

/**
 * Set resource name
 * @param name resource name (optional)
 * @returns ClassDecorator
 */
export function ResourceName(name?: string): ClassDecorator {
  return (...args) => {
    name = name ?? args[0].name;
    name = __getResourceName(name);

    SetMetadata(RESOURCE_NAME_METADATA, name)(...args);
  };
}

/**
 * Get resource name from execution context
 * @param reflector Reflector
 * @param context ExecutionContext
 * @returns resource name
 */
export function getResourceName(
  reflector: Reflector,
  context: ExecutionContext
) {
  return reflector.get(RESOURCE_NAME_METADATA, context.getClass());
}

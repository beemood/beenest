import { inferResourceName } from '@beenest/utils';
import { type ExecutionContext, SetMetadata } from '@nestjs/common';
import { type Reflector } from '@nestjs/core';

export const RESOURCE_NAME_METADATA_KEY = Symbol('RESOURCE_NAME_METADATA_KEY');

/**
 * Set {@link resourceName } to {@link RESOURCE_NAME_METADATA_KEY}
 *
 * @group Metadata
 * @returns ClassDecorator
 *
 */
export function ResourceName(resourceName?: string): ClassDecorator {
  return (...args) => {
    resourceName = resourceName ?? args[0].name;
    resourceName = inferResourceName(resourceName);

    SetMetadata(RESOURCE_NAME_METADATA_KEY, resourceName)(...args);
  };
}

/**
 * Get {@link RESOURCE_NAME_METADATA_KEY} value from context
 *
 * @group Metadata
 * @param reflector Reflector
 * @param context ExecutionContext
 * @returns resource name if find, `undefined` otherwise
 *
 */
export function getResourceName(
  reflector: Reflector,
  context: ExecutionContext
) {
  return reflector.get(RESOURCE_NAME_METADATA_KEY, context.getClass());
}

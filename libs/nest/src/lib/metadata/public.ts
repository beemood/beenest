import { ExecutionContext, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export const PUBLIC_METADATA_KEY = Symbol('PUBLIC_METADATA_KEY');

/**
 * Set `true` to {@link PUBLIC_METADATA_KEY}
 *
 * @group Metadata
 * @returns ClassDecorator
 *
 */
export function PublicResource(): ClassDecorator {
  return (...args) => {
    SetMetadata(PUBLIC_METADATA_KEY, true)(...args);
  };
}

/**
 * Set `true` to {@link PUBLIC_METADATA_KEY}
 *
 * @group Metadata
 * @returns MethodDecorator
 */
export function PublicOperation(): MethodDecorator {
  return (...args) => {
    SetMetadata(PUBLIC_METADATA_KEY, true)(...args);
  };
}

/**
 * Get {@link PUBLIC_METADATA_KEY} value from context
 *
 * @important {@link PublicResource} decorator overides {@link PublicOperation}
 *
 * @group Metadata
 * @param reflector Reflector
 * @param context ExecutionContext
 * @returns `true` if the resource/method is marked by either {@link PublicResource} or {@link PublicOperation}, `undefined` otherwise
 *
 */
export function isPublic(
  reflector: Reflector,
  context: ExecutionContext
): boolean {
  return reflector.getAllAndOverride<boolean>(PUBLIC_METADATA_KEY, [
    context.getHandler(),
    context.getClass(),
  ]);
}

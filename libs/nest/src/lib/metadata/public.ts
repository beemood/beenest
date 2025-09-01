import { ExecutionContext, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export const PUBLIC_METADATA_KEY = Symbol('PUBLIC_METADATA_KEY');

/**
 * Mark resource controller as public
 * @returns ClassDecorator
 */
export function PublicResource(): ClassDecorator {
  return (...args) => {
    SetMetadata(PUBLIC_METADATA_KEY, true)(...args);
  };
}

/**
 * Mark resource method as public
 * @returns MethodDecorator
 */
export function PublicOperation(): MethodDecorator {
  return (...args) => {
    SetMetadata(PUBLIC_METADATA_KEY, true)(...args);
  };
}

/**
 * Check the resource is public or not.
 * If resource class is decorated public, then all methods are public.
 * @param reflector Reflector
 * @param context ExecutionContext
 * @returns
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

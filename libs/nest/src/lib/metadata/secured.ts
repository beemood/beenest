import { ExecutionContext, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export const SECURED_METADATA_KEY = Symbol('SECURED_METADATA_KEY');

/**
 * Mark the resource controller as secured
 * @returns ClassDecorator
 */
export function SecuredResource(): ClassDecorator {
  return (...args) => {
    SetMetadata(SECURED_METADATA_KEY, true)(...args);
  };
}

/**
 * Mark the resource method as secured
 * @returns ClassDecorator
 */
export function SecuredOperation(): MethodDecorator {
  return (...args) => {
    SetMetadata(SECURED_METADATA_KEY, true)(...args);
  };
}

/**
 * Check the resource is secured or not.
 * If resource class is decorated secured, then all methods are secured.
 * @param reflector Reflector
 * @param context ExecutionContext
 * @returns
 */
export function isSecured(
  reflector: Reflector,
  context: ExecutionContext
): boolean {
  return reflector.getAllAndOverride<boolean>(SECURED_METADATA_KEY, [
    context.getHandler(),
    context.getClass(),
  ]);
}

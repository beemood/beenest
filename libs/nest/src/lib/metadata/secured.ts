import { type ExecutionContext, SetMetadata } from '@nestjs/common';
import { type Reflector } from '@nestjs/core';

export const SECURED_METADATA_KEY = Symbol('SECURED_METADATA_KEY');

/**
 * Set `true` to {@link SECURED_METADATA_KEY}
 *
 * @group Metadata
 * @returns ClassDecorator
 *
 */
export function SecuredResource(): ClassDecorator {
  return (...args) => {
    SetMetadata(SECURED_METADATA_KEY, true)(...args);
  };
}

/**
 * Set `true` to {@link SECURED_METADATA_KEY}
 *
 * @group Metadata
 * @returns MethodDecorator
 */
export function SecuredOperation(): MethodDecorator {
  return (...args) => {
    SetMetadata(SECURED_METADATA_KEY, true)(...args);
  };
}

/**
 * Get {@link SECURED_METADATA_KEY} value from context
 *
 * @important {@link SecuredResource} decorator overides {@link SecuredOperation}
 *
 * @group Metadata
 * @param reflector Reflector
 * @param context ExecutionContext
 * @returns `true` if the resource/method is marked by either {@link SecuredResource} or {@link SecuredOperation}, `undefined` otherwise
 *
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

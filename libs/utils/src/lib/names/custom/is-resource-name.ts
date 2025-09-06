import { InvalidNameError } from '../../errors/errors.js';

export const RESOURCE_NAME_EXPRESSION = () =>
  new RegExp(
    /Controller|Service|EventService|EventListener|Listener|Subscriber|Subscription|Module|Repository|Query|Dto|Schema|Model/gi
  );

/**
 * Check the {@link resouceName} is a valid resource name {@link RESOURCE_NAME_EXPRESSION}
 *
 * @group Names
 * @param resouceName
 * @returns boolean
 */
export function isResourceName(resouceName: string) {
  return RESOURCE_NAME_EXPRESSION().test(resouceName);
}

/**
 * Chec the target class name matches {@link RESOURCE_NAME_EXPRESSION}
 * @param targetClassName Target resouce class name
 * @returns
 * @throws if the resouce name does not match {@link RESOURCE_NAME_EXPRESSION}, then throw InvalidNameError
 */
export function isResourceNameOrThrow(targetClassName: string) {
  if (isResourceName(targetClassName)) {
    return true;
  }
  throw new InvalidNameError(
    `The resource name, ${targetClassName}, is invalid. Resouce names must match the regular expression, ${
      RESOURCE_NAME_EXPRESSION().source
    }`
  );
}

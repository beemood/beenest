import { InvalidNameError } from '../../errors/errors.js';

export const RESOURCE_NAME_EXPRESSION = () =>
  new RegExp(
    /Controller|Service|EventService|EventListener|Module|Repository|Query|Dto|Schema|Model/gi
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

export function isResourceNameOrThrow(resouceName: string) {
  if (isResourceName(resouceName)) {
    return true;
  }
  throw new InvalidNameError(
    `The resource name, ${resouceName}, is invalid. Resouce names must match the regular expression, ${
      RESOURCE_NAME_EXPRESSION().source
    }`
  );
}

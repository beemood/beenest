export const RESOURCE_NAME_EXPRESSION = () =>
  new RegExp(
    /Controller|Service|Module|Repository|Query|Dto|Schema|Model/,
    'gi'
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

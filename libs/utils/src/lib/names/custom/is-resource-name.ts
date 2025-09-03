export const RESOURCE_NAME_EXPRESSION = () =>
  new RegExp(
    /Controller|Service|Module|Repository|Query|Dto|Schema|Model/,
    'gi'
  );

export function isResourceName(resouceName: string) {
  return RESOURCE_NAME_EXPRESSION().test(resouceName);
}

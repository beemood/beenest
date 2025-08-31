/**
 * The function refer the name from functions or special classes such as from Controller, Service, and Module
 */
export function getResourceName(name: string) {
  const resouceName = name.replace(
    /Controller|Service|Module|Repository|findOne|findMany|find|Query|Dto|create|save|delete|update|byId/gi,
    ''
  );
  return resouceName;
}

/**
 * Infer resource name from the given class name. For example, for ProductController, the function return Product.
 * @param className target class name
 * @returns resource name
 */
export function getResourceName(className: string) {
  const resouceName = className.replace(
    /Controller|Service|Module|Repository|findOne|findMany|findAll|find|Query|Dto|create|save|delete|update|byId/gi,
    ''
  );
  return resouceName;
}

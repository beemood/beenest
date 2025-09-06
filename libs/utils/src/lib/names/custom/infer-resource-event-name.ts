import { names } from '../names.js';
import { inferOperationName } from './infer-operation-name.js';
import { inferResourceName } from './infer-resource-name.js';
import { isOperationNameOrThrow } from './is-operation-name.js';
import { isResourceNameOrThrow } from './is-resource-name.js';

export function inferResourceEventName(
  targetClassName: string,
  targetMethodName: string
) {
  isResourceNameOrThrow(targetClassName);
  isOperationNameOrThrow(targetMethodName);

  const resouceName = inferResourceName(targetClassName);
  const operationName = inferOperationName(targetMethodName);

  const eventName = [names(resouceName).pascalCase, operationName].join('.');

  return eventName;
}

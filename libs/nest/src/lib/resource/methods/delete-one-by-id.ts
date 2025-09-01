import { getResourceName, names, OperationNames } from '@beenest/utils';
import { Delete } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { OperationName } from '../../metadata/operation-name.js';
import { SelectParams } from '../swagger/select-params.js';

/**
 * `DELETE /singular-path/:id`
 * @returns MethodDecorator
 */
export function DeleteOneById(): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const resouceName = getResourceName(className);
    const variants = names(resouceName);
    const summary = `Delete one ${variants.kebabCase} by id`;
    const path = `${variants.kebabCase}/:id`;

    Delete(path)(...args);
    OperationName(OperationNames.UPDATE_ONE)(...args);
    ApiOperation({ summary })(...args);
    SelectParams()(...args);
  };
}

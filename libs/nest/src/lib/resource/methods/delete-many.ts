import { getResourceName, OperationNames, pluralNames } from '@beenest/utils';
import { Delete } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { OperationName } from '../../metadata/operation-name.js';
import { WhereParams } from '../swagger/where-paramas.js';

/**
 * Delete many item by query
 *
 * `DELETE /plural-path`
 *
 * @returns MethodDecorator
 */
export function DeleteMany(): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const resouceName = getResourceName(className);
    const pluralVariants = pluralNames(resouceName);
    const summary = `Delete many ${pluralVariants.kebabCase} by query`;
    const path = `${pluralVariants.kebabCase}`;

    Delete(path)(...args);
    OperationName(OperationNames.UPDATE_ONE)(...args);
    ApiOperation({ summary })(...args);
    WhereParams()(...args);
  };
}

import { getResourceName, OperationNames, pluralNames } from '@beenest/utils';
import { Put } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { OperationName } from '../../metadata/operation-name.js';
import { SelectParams } from '../swagger/select-params.js';
import { WhereParams } from '../swagger/where-paramas.js';

/**
 * `PUT /plural-path`
 * @returns MethodDecorator
 */
export function UpdateMany(): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const resouceName = getResourceName(className);
    const variants = pluralNames(resouceName);
    const path = `${variants.kebabCase}`;
    const summary = `Update many ${variants.kebabCase}`;

    Put(path)(...args);
    OperationName(OperationNames.UPDATE_MANY)(...args);
    ApiOperation({ summary })(...args);
    SelectParams()(...args);
    WhereParams()(...args);
  };
}

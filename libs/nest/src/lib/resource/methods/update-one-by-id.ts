import { inferResourceName, names, OperationNames } from '@beenest/utils';
import { Put } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { OperationName } from '../../metadata/operation-name.js';
import { SelectParams } from '../swagger/select-params.js';

/**
 * `PUT /singular-path/:id`
 * @returns MethodDecorator
 */
export function UpdateOneById(): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const resouceName = inferResourceName(className);
    const variants = names(resouceName);

    const path = `${variants.kebabCase}/:id`;
    const summary = `Update one ${variants.kebabCase} by id`;
    Put(path)(...args);
    OperationName(OperationNames.UPDATE_ONE)(...args);
    ApiOperation({ summary })(...args);
    SelectParams()(...args);
  };
}

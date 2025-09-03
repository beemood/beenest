import { inferResourceName, names, OperationNames } from '@beenest/utils';
import { Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { OperationName } from '../../metadata/operation-name.js';
import { SelectParams } from '../swagger/select-params.js';

/**
 * `GET /singular-path/:id`
 * @returns MethodDecorator
 */
export function FindOneById(): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const resouceName = inferResourceName(className);
    const variants = names(resouceName);
    const summary = `Find one ${variants.kebabCase} by id`;
    const path = `${variants.kebabCase}/:id`;

    Get(path)(...args);
    OperationName(OperationNames.READ_ONE)(...args);
    ApiOperation({ summary })(...args);
    SelectParams()(...args);
  };
}

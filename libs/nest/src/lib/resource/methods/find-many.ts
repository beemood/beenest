import { inferResourceName, OperationNames, pluralNames } from '@beenest/utils';
import { Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { OperationName } from '../../metadata/operation-name.js';
import { OrderByParams } from '../swagger/order-by-params.js';
import { PaginatorParams } from '../swagger/paginator-params.js';
import { SelectParams } from '../swagger/select-params.js';
import { WhereParams } from '../swagger/where-paramas.js';

/**
 * `GET /plural-path`
 *
 * @group Method Decorators
 * @returns MethodDecorator
 */
export function FindMany(): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const resouceName = inferResourceName(className);
    const pluralVariants = pluralNames(resouceName);
    const summary = `Find many ${pluralVariants.kebabCase}`;
    const path = `${pluralVariants.kebabCase}`;

    Get(path)(...args);
    OperationName(OperationNames.READ_MANY)(...args);
    ApiOperation({ summary })(...args);
    PaginatorParams()(...args);
    SelectParams()(...args);
    WhereParams()(...args);
    OrderByParams()(...args);
  };
}

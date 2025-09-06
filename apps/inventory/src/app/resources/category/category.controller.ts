import { type Prisma } from '@beenest/inventory-db';
import {
  AutoMethod,
  Body,
  DeleteOneById,
  FindOneById,
  ParamId,
  Query,
  ResourceController,
  UpdateOneById,
} from '@beenest/nest';
import { InjectRepository } from '@beenest/prisma';
import { pageObjectSchema, type Page } from '@beenest/zod';
import { Inject } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import {
  createCategorySchema,
  type CreateCategory,
} from './schemas/create-category.js';
import {
  orderByCategorySchema,
  type OrderCategory,
} from './schemas/order-by-category.js';
import {
  selectCategoryFieldsSchema,
  type SelectCategoryFields,
} from './schemas/select-category-fields.js';
import {
  whereCategorySchema,
  type WhereCategory,
} from './schemas/where-category.js';

@ResourceController()
export class CategoryController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.CategoryDelegate,
    @Inject(EventEmitter2) public readonly emitter: EventEmitter2
  ) {}

  @AutoMethod()
  async saveOne(
    @Body(createCategorySchema) data: CreateCategory,
    @Query(selectCategoryFieldsSchema) select: SelectCategoryFields
  ) {
    await this.emitter.emitAsync('category.save', { data, select });
    return await this.repo.create({ data, ...select });
  }

  @AutoMethod()
  async findAll(
    @Query(pageObjectSchema) page: Page,
    @Query(selectCategoryFieldsSchema) select: SelectCategoryFields,
    @Query(orderByCategorySchema) orderBy: OrderCategory,
    @Query(whereCategorySchema) where: WhereCategory
  ) {
    return await this.repo.findMany({
      ...page,
      ...select,
      ...orderBy,
      ...where,
    });
  }

  @FindOneById()
  async findOneById(
    @ParamId() id: number,
    @Query(selectCategoryFieldsSchema) select: SelectCategoryFields
  ) {
    return await this.repo.findUnique({ where: { id }, ...select });
  }

  @DeleteOneById()
  async deleteOneById(@ParamId() id: number) {
    return await this.repo.delete({ where: { id } });
  }

  @UpdateOneById()
  async updateOneByID(
    @ParamId() id: number,
    @Query(selectCategoryFieldsSchema)
    select: SelectCategoryFields
  ) {
    return await this.repo.delete({ where: { id }, ...select });
  }
}

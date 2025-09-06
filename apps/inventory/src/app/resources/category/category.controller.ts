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
  updateCategorySchema,
  type UpdateCategory,
} from './schemas/update-category.js';
import {
  whereCategorySchema,
  type WhereCategory,
} from './schemas/where-category.js';

@ResourceController()
export class CategoryController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.CategoryDelegate
  ) {}

  @AutoMethod()
  async saveOne(
    @Body(createCategorySchema) data: CreateCategory,
    @Query(selectCategoryFieldsSchema) select: SelectCategoryFields
  ) {
    return await this.repo.create({ data, ...select });
  }

  @AutoMethod()
  async findAll(
    @Query(pageObjectSchema) page: Page,
    @Query(selectCategoryFieldsSchema) select: SelectCategoryFields,
    @Query(orderByCategorySchema) orderBy: OrderCategory,
    @Query(whereCategorySchema) where: WhereCategory
  ) {
    const query = { ...page, ...select, ...orderBy, ...where };
    return await this.repo.findMany(query);
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
    @Body(updateCategorySchema) data: UpdateCategory,
    @Query(selectCategoryFieldsSchema)
    select: SelectCategoryFields
  ) {
    return await this.repo.update({ where: { id }, data, ...select });
  }
}

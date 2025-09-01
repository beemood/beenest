import { parseJson } from '@beenest/utils';
import z from 'zod';
import { BooleanFilterSchema } from '../../zod/filter/boolean-filter.js';
import { DateFilterSchema } from '../../zod/filter/date-filter.js';
import { IntegerFilterSchema } from '../../zod/filter/integer-filter.js';
import { StringFilterSchema } from '../../zod/filter/string-filter.js';
import { createBooleanSchema } from '../../zod/helpers/create-boolean-schema.js';
import { createOrderBySchema } from '../../zod/helpers/create-order-by-schema.js';
import { PageObject } from '../../zod/query/page-schema.js';

export class CategorySchema {
  static readonly Fields = ['id', 'createdAt', 'name', 'active'];

  protected static readonly SelectFields = createBooleanSchema(this.Fields);

  static readonly Read = z.object({
    id: z.int(),
    name: z.string(),
    createdAt: z.iso.datetime(),
    active: z.boolean(),
  });

  static readonly Create = this.Read.pick({
    name: true,
    active: true,
  }).required({ name: true });

  static readonly Update = this.Create.partial();

  static readonly OrderBy = createOrderBySchema(this.Fields);

  static readonly Where = z.preprocess(
    parseJson,
    z
      .object({
        id: IntegerFilterSchema,
        creaetdAt: DateFilterSchema,
        name: StringFilterSchema,
        active: BooleanFilterSchema,
      })
      .partial()
      .optional()
  );

  static readonly Query = z
    .object({
      ...PageObject,
      select: this.SelectFields,
      omit: this.SelectFields,
      orderBy: this.OrderBy,
      where: this.Where,
    })
    .partial()
    .optional();

  static readonly Modifier = z
    .object({
      select: this.SelectFields,
      omit: this.SelectFields,
      include: this.SelectFields,
    })
    .partial()
    .optional();
}

export type CreateCategory = z.infer<typeof CategorySchema.Create>;
export type UpdateCategory = z.infer<typeof CategorySchema.Update>;
export type WhereCategory = z.infer<typeof CategorySchema.Where>;
export type QueryCategory = z.infer<typeof CategorySchema.Query>;
export type ModifyCategory = z.infer<typeof CategorySchema.Modifier>;

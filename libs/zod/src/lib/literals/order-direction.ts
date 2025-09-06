import z from 'zod';

export const orderDirectionSchema = z
  .literal(['asc', 'desc'], { error: 'must be one of "asc" or "desc"' })
  .register(z.globalRegistry, {
    id: 'orderDirection',
    title: 'Order direction',
    description: 'Order direction, asc or desc value',
  });

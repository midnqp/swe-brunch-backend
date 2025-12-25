import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CreateOrderSchema = z.object({
  products: z.array(
    z.object({
      id: z.string(),
      quantity: z.number().int(),
    }),
  ),
});

export class CreateOrderDto extends createZodDto(CreateOrderSchema) {}

export type CreateOrder = z.infer<typeof CreateOrderSchema>;

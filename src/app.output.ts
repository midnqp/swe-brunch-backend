import {createZodDto} from 'nestjs-zod'
import {z} from 'zod'
import { CreateOrderSchema } from './app.input'

export const OrderSchema = CreateOrderSchema.extend({id: z.string()})

export class OrderDto extends createZodDto(OrderSchema) {}

export type Order = z.infer<typeof OrderSchema >
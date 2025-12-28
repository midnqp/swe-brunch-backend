import { Body, Controller, Get, Injectable, Post, Query } from '@nestjs/common';
//import { AppService } from './app.service';
import { CreateOrderDto } from './app.input';
import { ZodSerializerDto } from 'nestjs-zod';
import { Order, OrderDto, OrderSchema } from './app.output';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller()
export class AppController {
  constructor(
    //private readonly appService: AppService,
    @InjectRepository(Product)
    private products: Repository<Product>,
  ) {}

  @Get('')
  checkHealth() {
    return { data: 'ok' };
  }

  @Post('orders')
  @ZodSerializerDto(OrderDto)
  createOrder(@Body() orderData: CreateOrderDto): Order {
    // todo: add to database.
    console.log(orderData.products);
    return { id: '123', products: orderData.products };
  }

  @Post('products')
  async createProduct(@Body() productData: any) {
    let result
    const t = Array.isArray(productData)
    if (t == true ) {
       const list = Product.create(productData)
       result = await Product.save(list)
    }
    else {
      result = await Product.create(productData).save()
    }
    return result
  }

  @Get('products')
  async listProducts(@Query() filters: any) {
    const { menu} = filters
    const list = await this.products.findBy({menu});
    return {data: list }
  }
}

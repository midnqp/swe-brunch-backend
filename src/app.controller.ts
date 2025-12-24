import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderDto } from './app.input';
import { ZodSerializerDto } from 'nestjs-zod';
import { Order, OrderDto, OrderSchema } from './app.output';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  checkHealth() {
    return {data: 'ok' }
  }
  
  @Post('orders')
  @ZodSerializerDto(OrderDto)
  createOrder(@Body() orderData: CreateOrderDto):Order {
    // todo: add to database.
    console.log(orderData.products)
    return {id: '123', products: orderData.products}
  }
  
  @Get('products')
  listProducts() {
    const elist = [
      {
        id: "eng-1",
        name: "Cheese Mushroom Omelette",
        price: 449,
        image: "/cheese-omlette.jpg",
        description:
          "Prepared with egg stuffed with mushrooms & cheese, serve with bread toast, tomato, lettuce & sauce.",
      },
      {
        id: "eng-2",
        name: "American Breakfast",
        price: 699,
        image: "/american-breakfast.jpg",
        description:
          "Consists of 2 pcs chicken salami, 2 pcs pancake, scrambled egg—served with butter & jam.",
      },
      {
        id: "eng-3",
        name: "Beef Burger",
        price: 699,
        image: "/beef-burger.jpg",
        description:
          "Prepared with beef patty, sliced cheese, lettuce, tomato & onion.",
      },
      {
        id: "eng-4",
        name: "Cappucino",
        price: 249,
        image: "/cappucino.jpg",
        description:
          "A delightful blend of espresso, steamed milk & thick milk foam, creating a creamy, frothy texture.",
      },
    ]
    const plist = [
      {
        id: "pm-2",
        name: "French Fries",
        price: 299,
        image: "/french-fries.jpg",
        description:
          "A fresh box of precision-cut fries, just as fried as your developers' weekend plans.",
      },
      {
        id: "pm-3",
        name: "Basmati Kacchi—1:5",
        price: 2499,
        image: "/basmati-kacchi.jpg",
        description:
          "A delightful preparation of slow cooked aromatic rice layered with marinated mutton pcs.",
      },
    ]
    const flist = [
      {
        id: "founder-1",
        name: "Ramen",
        price: 99,
        image: "/ramen.jpg",
        description:
          "Save money eating ramen like a true founder. You have yet to find product-market fit, so stretch your runway!",
      },
      {
        id: "founder-2",
        name: "Tomahawk Steak",
        price: 2499,
        image: "/steak.jpg",
        description:
          "Just raised a Series A? Treat the entrepreneur in you with a 400g juicy grilled steak.",
      },
      {
        id: "founder-3",
        name: "Sparkling Water",
        price: 599,
        tax: true,
        image: "/water.jpg",
        description:
          "250ml sparkling water, naturally carbonated off Saint-Galmier—only for closers and Series A-ers.",
      },
    ]

    return {data: [...elist, ...plist, ...flist] }
  }
}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column('text')
  image: string;

  @Column('text')
  description: string;

  // todo: product belongsto menu. menu hasmany product.
}

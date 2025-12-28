import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
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

  //'eng' | 'pm' | 'founder'
  @Column()
  menu: string
}

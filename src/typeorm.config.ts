import { DataSource } from 'typeorm';

export default new DataSource({
  url: process.env.DB_URL,
  type: 'postgres',
  entities: ['./dist/src/product.entity.js'],
  migrations: ['./dist/migrations/*.js']
});

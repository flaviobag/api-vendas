import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'apivendas',
  logging: false,
  synchronize: false,
  name: 'default',
  entities: ['src//.entity{.ts,.js}'],
  migrations: ['./src/shared/typeorm/migrations/*.ts'],
  subscribers: ['src/subscriber//*{.ts,.js}'],
  // cli: {
  //   migrationDir: './src/shared/typeorm/migrations',
  // },
});

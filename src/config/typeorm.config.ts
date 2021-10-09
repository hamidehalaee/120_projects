import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT || 5432,
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'hamideh',
  database: process.env.DATABASE_NAME || 'todo',
  synchronize: false,
  autoLoadEntities: true,
  logging: process.env.DATABASE_LOG === 'true',
};

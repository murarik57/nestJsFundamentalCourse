module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: ['dist/**/*.entity.ts'],
  migrations: ['dist/migrations/*.ts'],
  cle: {
    migrationsDir: 'src/migrations',
  },
};

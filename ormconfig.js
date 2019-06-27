let defaultConnection = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'vincilbishop',
  password: '',
  database: 'hello_nestjs',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  migrations: ['dist/migration/*.js'],
  cli: {
    migrationsDir: 'src/migration'
  }
};

let seedConnection = {
  ...defaultConnection,
  name: 'seed',
  migrations: [
    'dist/seed/*.js'
  ],
  cli: {
    migrationsDir: 'src/seed',
  }
};

module.exports = [
  defaultConnection,
  seedConnection
];

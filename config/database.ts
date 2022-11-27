export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'shahriyardx'),
      user: env('DATABASE_USERNAME', 'shah'),
      password: env('DATABASE_PASSWORD', 'shah'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

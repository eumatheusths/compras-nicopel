import postgres from 'postgres';

const connectionString = import.meta.env.DATABASE_URL;

const sql = postgres(connectionString, {
  ssl: 'require',
  max: 10, // Conexões máximas para serverless
});

export default sql;
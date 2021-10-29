import { Pool } from 'pg'
import config from '../../config'
import logger from 'loglevel'

export default async function seedDb() {
  // PostgreSQL database used in production only
  if (process.env.NODE_ENV != 'production') return

  logger.info(`Creating and seeding products table 📜`)
  const pool = new Pool({
    connectionString: config.DB_CONNECTION_STRING,
  })

  const client = await pool.connect()
  await client.query(sampleDb)
  await client.end()
}

const sampleDb =
`DROP TABLE IF EXISTS products;

CREATE TABLE products (
  product_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 100 ) UNIQUE NOT NULL,
  base_cost NUMERIC ( 6,2 ) NOT NULL,
  base_kwh INTEGER NULL,
  cost_per_kwh NUMERIC (5,2) NOT NULL,
  created_on TIMESTAMP NOT NULL
);

INSERT INTO products
  (name, base_cost, base_kwh, cost_per_kwh, created_on)
VALUES
  ('Basic Electricity Tariff', 60.0, null, 0.22, NOW()),
  ('Packaged Tariff', 800.0, 4000, 0.30, NOW());`
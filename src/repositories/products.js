const { Pool, types } = require('pg')
import config from '../../config'

types.setTypeParser(types.builtins.NUMERIC, (value) => {
  return parseFloat(value);
});

const pool = new Pool({
  connectionString: config.DB_CONNECTION_STRING,
})

async function getProductsFromDB() {
  const client = await pool.connect()
  let products
  try {
    products = await client.query(`SELECT * FROM products`)
  } finally {
    client.release()
  }

  return products?.rows || []
}

async function getProductsFromMemory() {
  return [
    {
      name: 'Basic Electricity Tariff',
      base_cost: 60,
      cost_per_kwh: 0.22
    },
    {
      name: 'Packaged Tariff',
      base_cost: 800,
      base_kwh: 4000,
      cost_per_kwh: 0.30
    },
  ]
}

async function getProducts(){
  // Postgres database in production only; otherwise in-memory
  if (process.env.NODE_ENV === 'production') {
    return getProductsFromDB()
  }
  return getProductsFromMemory()
}

export default {
  getProducts,
}
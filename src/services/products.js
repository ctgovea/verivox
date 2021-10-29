import repository from '../repositories/products' 

function getAnnualCost(product, consumption) {
  if (!product || !consumption || consumption <= 0) return 0

  let extraKwh = consumption
  if (product.base_kwh) {
    extraKwh = consumption > product.base_kwh ? consumption - product.base_kwh : 0
  }

  return product.base_cost + extraKwh * product.cost_per_kwh
}

async function getProducts(consumption) {
  let products = await repository.getProducts()

  let costs = products.map(p => ({
      name: p.name,
      annualCost: getAnnualCost(p, consumption)
  }))

  return costs.sort((p1, p2) => (p1.annualCost > p2.annualCost) ? 1 : -1)
}

export default {
  getProducts,
  getAnnualCost
}
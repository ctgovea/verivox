import products from '../src/services/products'

describe('Calculate tariffs given a yearly consumption', () => {
  
  describe('Basic Tariff', () => {
    it('3500 kWh/year on a basic tariff should be 830 €/year', () => {
      let cost = products.getAnnualCost(basicProduct, 3500)
      expect(cost).toBe(830)
    })

    it('4500 kWh/year on a basic tariff should be 1050 €/year', () => {
      let cost = products.getAnnualCost(basicProduct, 4500)
      expect(cost).toBe(1050)
    })

    it('6000 kWh/year on a basic tariff should be 1380 €/year', () => {
      let cost = products.getAnnualCost(basicProduct, 6000)
      expect(cost).toBe(1380)
    })
  })

  describe('Packaged Tariff', () => {
    it('3500 kWh/year on a packaged tariff should be 800 €/year', () => {
      let cost = products.getAnnualCost(packagedProduct, 3500)
      expect(cost).toBe(800)
    })

    it('4500 kWh/year on a packaged tariff should be 950 €/year', () => {
      let cost = products.getAnnualCost(packagedProduct, 4500)
      expect(cost).toBe(950)
    })

    it('6000 kWh/year on a packaged tariff should be 1400 €/year', () => {
      let cost = products.getAnnualCost(packagedProduct, 6000)
      expect(cost).toBe(1400)
    })
  })
})

let basicProduct = {
  name: 'Basic Electricity Tariff',
  base_cost: 60,
  cost_per_kwh: 0.22
}

let packagedProduct = {
  name: 'PackagedTariff',
  base_cost: 800,
  base_kwh: 4000,
  cost_per_kwh: 0.30
}

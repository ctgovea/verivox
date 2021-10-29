import express from 'express'
import service from '../services/products'

// A function to get the routes.
function getTariffRoutes() {
  const router = express.Router()
  router.get('/', getTariffs)
  return router
}

// all the controller and utility functions here:
async function getTariffs(req, res) {
  const products = await service.getProducts(req.query.consumption)
  res.send(products)
}

export {getTariffRoutes}
require('dotenv').config()
const { authorizeBM, callbackBM } = require('./facebook/auth')

const AIAdApiRoutes = app => {
  app.get(`/${process.env.ROUTE_PREFIX}business/login`, authorizeBM)
  app.get('/${process.env.ROUTE_PREFIX}business/callback', callbackBM)
}

module.exports = {
  AIAdApiRoutes,
}

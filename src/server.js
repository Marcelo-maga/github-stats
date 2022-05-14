require('dotenv/config')

const express = require('express')
const routes = require('./routes')

const App = express()

App.use(routes)

App.listen(process.env.PORT, () => {
  console.log('Estamos no ar 🚀')
})
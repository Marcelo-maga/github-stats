const { Router } = require('express')
const routes = Router()


//Controllers
const GetInfoUserController = require('./controller/getInfoUserController')

// Declaraçoes
const getInfoUserController = new GetInfoUserController()

routes.get('/', (request, response) => {
  response.send('Acho que você se esqueceu de alguma coisa, tipo o username!!')
})

// Rota para poder pegar o username
routes.get('/api/:username', getInfoUserController.handle)


module.exports = routes
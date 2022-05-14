const GetInfoUserCase = require('../useCase/getInfoUserUseCase')

const getInfoUserCase = new GetInfoUserCase()

class GetInfoUserController {
  async handle (request, reponse) {
    const { username } = request.params

    const userInfo = await getInfoUserCase.handle(username)


  }
}

module.exports = GetInfoUserController
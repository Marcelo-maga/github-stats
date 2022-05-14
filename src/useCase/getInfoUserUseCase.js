const axios = require('axios')

class GetInfoUserUseCase {
  async handle (username) {
    
    const urlBase = `https://api.github.com/users/${username}`
    
    const userInfoResponse = await axios.get(urlBase)
    
    var userInfo = {
      username: username,
      name: userInfoResponse.data.name,
      dataCreate: userInfoResponse.data.created_at,
      publicRepos: userInfoResponse.data.public_repos,
      followers: userInfoResponse.data.followers,
      seguindo: userInfoResponse.data.following
    }

    return userInfo

  }
}

module.exports = GetInfoUserUseCase
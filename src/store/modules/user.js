import { login } from '@/api/user'
import { setToken } from '@/utils/token'
const state = {}
const mutations = {}
const actions = {
  login ({ commit }, { username, password }) {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await login({ username, password })
        const { token, refreshToken } = data
        setToken('token', token)
        setToken('refreshToken', refreshToken)
        console.log(data)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }
}
export default { state, mutations, actions }

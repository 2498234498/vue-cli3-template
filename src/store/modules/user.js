import { login, getUserInfo } from '@/api/user'
import { setToken } from '@/utils/token'

const state = {
  userInfo: null
}

const mutations = {
  setUserInfo: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

const actions = {
  login ({ commit }, { username, password }) {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await login({ username, password })
        const { token, refreshToken } = data
        setToken('token', token)
        setToken('refreshToken', refreshToken)
        const userInfo = await getUserInfo()
        commit('setUserInfo', userInfo.data)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default { state, mutations, actions }

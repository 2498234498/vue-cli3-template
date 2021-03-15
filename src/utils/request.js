import axios from 'axios'
import { getToken, setToken } from '@/utils/token'
import { refreshToken } from '@/api/user'
import router from '@/router'

// 创建axios实例
const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? window.IP_CONFIG.BASE_URL : ''
})

// 错误请求列表
let errorResponseList = []

instance.interceptors.request.use(
  async config => {
    config.headers['X-Authorization'] = `Bearer ${getToken('token')}`
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  async response => {
    return response
  },
  error => {
    // 错误请求信息
    const errorResponse = error.response
    // 存储错误信息
    errorResponseList.push(errorResponse)
    // 错误请求编码
    const { status, errorCode } = errorResponse.data
    switch (status) {
      case 401:
        switch (errorCode) {
          // 需要重新请求的请求
          case 10:
            router.push('/login')
            break
          case 11:
            if (getToken('token')) {
              throttleInstance()
            } else {
              router.push('/login')
            }
            break
          default:
            break
        }
        break
      default:
        break
    }
  }
)

// 节流
function throttle (wait = 1000) {
  let timeout = null
  return function () {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        refreshToken({
          refreshToken: getToken('refreshToken')
        }).then(result => {
          const { token, refreshToken } = result.data
          setToken('token', token)
          setToken('refreshToken', refreshToken)
          Promise.all([...errorResponseList.map(response => instance(response.config))])
          errorResponseList = []
        }).catch(error => {
          router.push({ path: '/login' })
          Promise.reject(error)
        })
      }, wait)
    }
  }
}

const throttleInstance = throttle()

export default instance

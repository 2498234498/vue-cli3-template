import request from '@/utils/request'

export function login (data) {
  return request({
    url: '/api/auth/login',
    method: 'post',
    data
  })
}

export function getUserInfo () {
  return request({
    url: '/api/auth/user'
  })
}

export function refreshToken (data) {
  return request({
    url: '/api/auth/token',
    method: 'post',
    data
  })
}

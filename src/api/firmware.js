import request from '@/utils/request'

export function getOtas (params) {
  return request({
    url: '/api/otas',
    params
  })
}

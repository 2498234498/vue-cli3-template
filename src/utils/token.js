/**
 * @description 获取token
 * @param tokenKey
 */
export const getToken = tokenKey => window.sessionStorage.getItem(tokenKey)

/**
 * @description 设置token
 * @param tokenKey
 * @param tokenValue
*/
export const setToken = (tokenKey, tokenValue) => window.sessionStorage.setItem(tokenKey, tokenValue)

/**
 * @description 删除token
 * @param tokenKey
*/
export const removeToken = tokenKey => window.sessionStorage.removeItem(tokenKey)

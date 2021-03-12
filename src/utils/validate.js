/**
 * @description 判断是否为空
 * @param str
 * @returns {boolean}
 */
export function isBlank (str) {
  return (
    str == null ||
    false ||
    str === '' ||
    str.trim() === '' ||
    str.toLocaleLowerCase().trim() === 'null'
  )
}

/**
 * @description 判断是否是手机号
 * @param str
 * @returns {boolean}
 */
export function isPhone (str) {
  const reg = /^1\d{10}$/
  return reg.test(str)
}

/**
 * @description 判断是否是邮箱
 * @param str
 * @returns {boolean}
 */
export function isEmail (str) {
  const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return reg.test(str)
}

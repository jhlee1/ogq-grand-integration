export const setCookie = (name, value, expiredays, domain = '', path = '/') => {
  const oldCookieValue = getCookie(name)
  if (oldCookieValue !== null || oldCookieValue === '') {
    deleteCookie(name, domain, path)
  }
  let cookie = ''
  cookie = name.concat('=').concat(value).concat(';path=').concat(path)

  if (expiredays) {
    const todayDate = new Date()
    todayDate.setDate(todayDate.getDate() + expiredays)
    cookie += ';expires=' + todayDate.toUTCString()
  }
  document.cookie = cookie
}

export const getCookie = (name) => {
  const result = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
  return result ? result[2] : null
}

export const deleteCookie = (name, domain = '', path = '/') => {
  const expires = new Date()
  document.cookie = name.concat('=').concat(';expires=').concat(expires.toUTCString()).concat(';path=').concat(path)
}

export const login = (token) => {
  deleteCookie('token')
  setCookie('token', token)
}

export const logout = () => {
  deleteCookie('token')
}

const utils = {
  getCookie,
  setCookie,
  deleteCookie,
  login,
  logout
}
export default utils

export const GET_AUTH = 'GET_AUTH'
export const LOGIN_CODE = 'LOGIN_CODE'

export default {
  [GET_AUTH] (state, payload) {
    state.admin = payload
  },
  [LOGIN_CODE] (state, payload) {
    state.loginCode = payload
  }
}

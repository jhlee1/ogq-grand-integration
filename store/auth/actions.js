import * as mutations from './mutations'
import { login } from '@/utils/cookieUtils'

export const GET_AUTH = 'GET_AUTH'

export default {
  async [GET_AUTH] ({ commit }, payload) {
    console.log('payload ', payload)
    this.$axios.post('http://52.78.22.43:8080/auth/login', {
      googleAccessToken: payload.accessToken
    }).then((data) => {
      console.log('data ', data)
      login(data.data.token)
      commit(mutations.GET_AUTH, data.data.admin)
    }).catch((err) => {
      commit(mutations.LOGIN_CODE, err.response.data.code)
    })
  }
}

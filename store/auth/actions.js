import * as mutations from './mutations'

import gAPI from '@/gapi/analytics'
import { login } from '@/utils/cookieUtils'

export const GET_AUTH = 'GET_AUTH'

export default {
  async [GET_AUTH] ({ commit }, payload) {
    console.log('payload ', payload)
    this.$axios.post('/auth/login', {
      googleAccessToken: payload.accessToken
    }).then((data) => {
      console.log('data ', data)
      login(data.data.token)
      gAPI.postLogin(data.data.token)
      commit(mutations.GET_AUTH, data.data.admin)
    }).catch((err) => {
      commit(mutations.LOGIN_CODE, err.response.data.code)
    })
  }
}

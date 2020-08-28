import * as mutations from './mutations'
import utils from '@/utils/cookieUtils'

export const INIT_CARD_LIST = 'INIT_CARD_LIST'
export const PUT_BACK_CARD = 'PUT_BACK_CARD'
export const PUT_USE_CARD = 'PUT_USE_CARD'

export default {
  async [INIT_CARD_LIST] ({ commit }) {
    this.$axios.get('/corporateCards', {
      headers: {
        'Authorization': 'Bearer '+ utils.getCookie('token')
      }
    }).then((data) => {
      const res = data.data
      commit(mutations.INIT_CARD_LIST, res)
    }).catch((err) => {
      console.error('INIT_CARD_LIST Actions error ', err)
    })
  },
  async [PUT_BACK_CARD] ({ commit }, payload) {
    this.$axios.put('/corporateCards/putBack', { cardNum: payload }, {
      headers: {
        'Authorization': 'Bearer '+ utils.getCookie('token')
      }
    }).then((data) => {
      commit(mutations.PUT_BACK_CARD, data.data.returned)
    }).catch((err) => {
      console.error('PUT_BACK_CARD error ', err)
    })
  },
  async [PUT_USE_CARD] ({ commit }, payload) {
    this.$axios.put('/corporateCards/use', { cardNum: payload }, {
      headers: {
        'Authorization': 'Bearer '+ utils.getCookie('token')
      }
    }).then((data) => {
      commit(mutations.PUT_USE_CARD, !data.data.borrowed)
    }).catch((err) => {
      console.error('PUT_USE_CARD error ', err)
    })
  }
}

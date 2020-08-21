import * as mutations from './mutations'
import utils from '@/utils/cookieUtils'

export const INIT_CARD_LIST = 'INIT_CARD_LIST'

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
  }
}

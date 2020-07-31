import * as mutations from './mutations'
import utils from '@/utils/cookieUtils'

export const INIT_CARD_LIST = 'INIT_CARD_LIST'

export default {
  async [INIT_CARD_LIST] ({ commit }) {
    this.$axios.get('/corporateCards', {
      headers: {
        token: utils.getCookie('token')
      }
    }).then((data) => {
      console.log('data ', data)
    }).catch((err) => {
      console.error('INIT_CARD_LIST Actions error ', err)
    })
    const res = [{
      cardNum: 1,
      name: '김연희',
      borrowed: true
    }]
    commit(mutations.INIT_CARD_LIST, res)
  }
}

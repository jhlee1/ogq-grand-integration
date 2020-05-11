import * as mutations from './mutations'

export const INIT_CARD_LIST = 'INIT_CARD_LIST'

export default {
  async [INIT_CARD_LIST] ({ commit }) {
    const res = [{
      id: 1,
      status: false,
      rentalName: '김연희'
    }, {
      id: 3,
      status: false,
      rentalName: '이세헌'
    }, {
      id: 4,
      status: false,
      rentalName: '이주한'
    }, {
      id: 8,
      status: false,
      rentalName: '전준리'
    }, {
      id: 5,
      status: false,
      rentalName: '김준수'
    }, {
      id: 6,
      status: false,
      rentalName: '임영웅'
    }, {
      id: 7,
      status: true,
      rentalName: null
    }, {
      id: 2,
      status: false,
      rentalName: '케빈오'
    }, {
      id: 10,
      status: true,
      rentalName: null
    }]
    commit(mutations.INIT_CARD_LIST, res)
  }
}

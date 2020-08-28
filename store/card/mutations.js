export const INIT_CARD_LIST = 'INIT_CARD_LIST'
export const PUT_BACK_CARD = 'PUT_BACK_CARD'
export const PUT_USE_CARD = 'PUT_USE_CARD'

export default {
  [INIT_CARD_LIST] (state, payload) {
    state.cardList = payload
  },
  [PUT_BACK_CARD] (state, payload) {
    state.returned = payload
  },
  [PUT_USE_CARD] (state, payload) {
    state.returned = payload
  }
}

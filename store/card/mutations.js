export const INIT_CARD_LIST = 'INIT_CARD_LIST'

export default {
  [INIT_CARD_LIST] (state, payload) {
    state.cardList = payload
  }
}

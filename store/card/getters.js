export const LOAD_CARD_LIST = 'LOAD_CARD_LIST'
export const RETURNED = 'RETURNED'

export default {
  [LOAD_CARD_LIST]: state => state.cardList,
  [RETURNED]: state => state.returned
}

import { createNamespacedHelpers } from 'vuex'
import getters from './getters'

const NAMESPACE = 'card'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers(NAMESPACE)

export { mapState, mapGetters, mapActions }

const state = () => ({
  card: {},
  cardList: []
})

const mutations = {
  initCardList (state, payload) {
    console.log('dddd')
    state.cardList = [{
      id: 1,
      rentalName: '김연희'
    }, {
      id: 3,
      rentalName: '이세헌'
    }, {
      id: 4,
      rentalName: '이주한'
    }, {
      id: 8,
      rentalName: '전준리'
    }]
  }
}

const actions = {
  initCardList({ commit, state }, payload) {
    commit('initCardList', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

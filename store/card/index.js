import { createNamespacedHelpers } from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const NAMESPACE = 'card'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers(NAMESPACE)

export { mapState, mapGetters, mapActions }

const state = () => ({
  card: {},
  cardList: [],
  returned: true
})

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

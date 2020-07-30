import { createNamespacedHelpers } from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const NAMESPACE = 'auth'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers(NAMESPACE)

export { mapState, mapGetters, mapActions }

const state = () => ({
  admin: false,
  loginCode: 0
})

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {count: 0}
const mutations = {
  mutationsAddCount (state, n = 0) {
    return (state.count += n)
  },
  mutationsReduceCount (state, n = 0) {
    return (state.count -= n)
  }
}
const actions = {
  actionsAddCount(context, n = 0) {
    console.log(context)
    return context.commit('mutationsAddCount', n)
  },
  actionsReduceCount({ commit }, n = 0) {
    return commit('mutationsReduceCount', n)
  }
}

const getters = {
  getterCount(state) {
    return (state.count)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

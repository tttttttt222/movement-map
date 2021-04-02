import Vue from 'vue'
import Vuex from 'vuex'
import location from './locationVuex'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    location
  }
})

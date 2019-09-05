import Vue from 'vue'
import Vuex from 'vuex'
import stores from './modules/store'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    stores,
  }
})

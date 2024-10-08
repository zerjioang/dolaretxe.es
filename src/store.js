import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    appLoading(state, loading) {
      state.loading = loading
    }
  },
  actions: {

  },
  getters: {
    loading: state => state.loading
  }
})

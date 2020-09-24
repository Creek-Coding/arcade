import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: null
  },
  getters:{
    getData: state => state.data,
    getGameByID: (state, id) => state.data.find(x => x.id === id)
  },
  mutations: {
    setData: (state, obj) => state.data = obj
  },
})

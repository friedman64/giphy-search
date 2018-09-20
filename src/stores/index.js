import Vue from 'vue'
import Vuex from 'vuex'
import searchList from './modules/searchList'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      searchList
    },
    strict: true
})
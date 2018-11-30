import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
      city:localStorage.city||'上海'
  },
  mutations:{
    changCity(state,city){
      //state 就是 第一个对象  city就是外部传来的数据

      state.city=city

      localStorage.city=city
    }
  }
})

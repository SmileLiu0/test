// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  './assets/css/reset.css'
import './assets/css/border.css'
import './assets/css/iconfont.css'
import fastClick from 'fastclick'
import store from './store/index'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

router.beforeEach((to,from,next)=>{
  window.document.title=to.meta.title;
  next();
})

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
//移动端 300毫秒 已经解决
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

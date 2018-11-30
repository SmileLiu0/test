import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import City from '../pages/city/City'
import Tab from '../pages/tab/Tab'
import Dection from '../pages/dection/Dection'
import Todolist from '../pages/todolist/Todolist'
Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉路由地址的# 不在 routes 里面
  routes: [

    {
      path: '/home',
      name: 'home',
      meta:{
        title:'首页'
      },
      component: Home
    },
    //首页

    {
      path: '/city',
      name: 'city',
      meta:{
        title:'城市列表'
      },
      component: City
    },
    //测试 tab
    {
      path: '/tab',
      name: 'tab',
      component: Tab
    },

    {
      path: '/',
      meta:{
        title:'首页'
      },
      redirect: '/home'
    },
    //当默认 就重新 定向 home页面
    {
      path: '*',
      meta:{
        title:'首页'
      },
      redirect:'/home'
    },
    //当输入 乱码 重新定位 首页
    {
      path:'/dection/:id',
      name:'dection',
      meta:{
        title:'详情页'
      },
      component:Dection
    },


    {
      path:'/todolist',
      name:'todulist',
      meta:{
        title:'详情页'
      },
      component:Todolist
    }

  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

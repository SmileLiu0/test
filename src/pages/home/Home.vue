<template>
    <div class="home">
      <home-header></home-header>
      <home-swiper :swiper="swiper"></home-swiper>
      <icon :iconList="iconList"></icon>
      <recommend :recommendList="recommendList"></recommend>
      <wekit :weekendList="weekendList"></wekit>
    </div>
</template>

<script>
  import HomeHeader from './commpoents/Header'
  import HomeSwiper from './commpoents/Swiper'
  import icon from './commpoents/Icon'
  import Recommend from './commpoents/Recommend'
  import Wekit from './commpoents/Wekit'
  import axios from 'axios'

  import {mapState } from 'vuex'

    export default {
        name: "Home",
      data(){
          return{
            swiper:[],//轮播图的数组
            iconList:[],//小图标
            recommendList:[],//猜你喜欢
            weekendList:[],//周末喜欢
            lastCity:'',//最后一次电机的城市
          }
      },
      components:{
        HomeHeader,
        HomeSwiper,
        icon,
        Recommend,
        Wekit
      },
      computed:{
        ...mapState(['city'])
      },
      methods:{
        getHomeInfo(){
          axios.get('/api/index.json?city=' + this.city)
            //这个是请求不同 city的 接口
            //ajax也发送成功了
            //如果携带路径（就是相对应的网址）该怎么做啊？
            .then(this.getHomeInoSucc)
        },
        getHomeInoSucc(res){
          res=res.data;//下一层 就相当于提前选择一层
          // res=res.data;
          if (res.ret && res.data){
            //res.ret 是后端返回正确  并且 res和data里面有值
            const data= res.data;
            //直接简化一下
           this.swiper=data.swiperList;
           this.iconList=data.iconList;
           this.recommendList=data.recommendList;
           this.weekendList=data.weekendList;

          }

          console.log(res)

        }
      },
      // mounted(){
      //     this.lastCity=this.city;
      //     this.getHomeInfo()
      // },

      activated(){

          if(this.lastCity !== this.city){
             this.lastCity=this.city;
            this.getHomeInfo();

          }
          //是否相同 不相同 就在发 相同不发
      }
    }
</script>

<style scoped>

</style>

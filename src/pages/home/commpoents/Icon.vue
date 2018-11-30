<template>
    <div class="icons">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide  v-for="(pags,index) in pages" :key="index">
          <div class="icon" v-for="(item,index) in pags" :key="item.id" >
            <div class="icon-img">
              <img :src="item.imgUrl" alt="" class="icon-img-conten">
            </div>
            <p class="icon-dec" v-text="item.desc"></p>
          </div>
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
        name: "Icon",
    props:{
      iconList:{
        tyle:Array,
        default:[]
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {

        swiperOption: {

          pagination: {
            el: '.swiper-pagination'
          },


        },
      }
    },
    computed:{



          pages (){
            const pages =[]
            //每一项循环 具体的循环项  和下标
            this.iconList.forEach((item,index)=>{
              //翻页面 第一页还是第二页
              const page= Math.floor(index/8)
              //下标从0开始 2/8 0。25 向下去整 0
              if(!pages[page]){//不存在的话
                  pages[page]=[]
              }
              pages[page].push(item)

            })
            return pages;
          }
    }
    }
</script>

<style scoped lang="stylus">
  @import "~styl/var.styl"

  .icons >>> .swiper-container
   padding-top .5rem
   height 0
   padding-bottom 58%
 .icons
   margin-top .2rem
  .icon
    width 24%
    float left
    height 0
    padding-bottom 25%
    overflow hidden
    position relative
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      img
        width 70%
        display block
        margin 0 auto
    .icon-dec
      position absolute
      left 0
      right 0
      bottom 0
      height .44rem
      line-height .44rem
      text-align center
      ellipsis()
</style>

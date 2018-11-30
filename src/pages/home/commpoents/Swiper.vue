<template>
    <div class="swiper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in swiper" :key="item.id" class="swiper_img">
          <img :src="item.imgUrl" >
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
        name: "Swiper",
      props:{
        swiper:{
          type:Array,
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

            autoplay:{
              disableOnInteraction: false,//默认true
              delay:2000,//默认3000
            },
          },
        }
      }

    }
</script>

<style scoped lang="stylus">
  .swiper
    width 100%
    height 0
    padding-bottom 27%
    background #25a4bb
    img
      width 100%
      display block
      height 100%


</style>

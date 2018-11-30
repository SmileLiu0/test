<template>
    <div class="gerry" @click="handleGerryClose">
      <!--把swiper拿过来-->
      <div class="gerry-img">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide  class="swiper_img" v-for="(item, index) in gallaryImgs" :key="index">
          <img class="img-item" :src="item" >
        </swiper-slide>


        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination">ddd</div>
      </swiper>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Gerlly",

      //外部接受
      props:{
        gallaryImgs:Array
      },
        data (){
          return{
            //传递一个对象 然后里面有个 pagination 属性 写上class
            //然后 去百度查找对象的属性
            swiperOption:{
              pagination:{
                el:'.swiper-pagination',
                type:'fraction'

              },
              observer:true,
              observeParents:true,

              //分页器样式 类型
            }
          }
      },
      methods:{
          //点击时候  触发
        handleGerryClose (){
          this.$emit('close')
        }
      }
    }
</script>

<style scoped lang="stylus">
  .gerry >>>.swiper-container
    overflow inherit
  .gerry
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    background #000000
    z-index 99
    width 100%
    color white
    display flex
    justify-content center
    flex-direction column
    .gerry-img
      width 100%
      height 0
      padding-bottom 100%
      .img-item
        width 100%
        display block
    .swiper-pagination
      color #ffffff
      bottom -1rem
</style>

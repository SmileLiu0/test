<template>
    <div class="wekit">
      <h1>周末游玩</h1>
      <div class="wekit_conent" v-for="(item,index) in weekendList " :key="item.id">
        <img class="wekit_img" :src="item.imgUrl" alt="">
        <div class="wekit_name" v-text="item.title"></div>
        <div class="wekit_dec" v-text="item.desc"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Wekit",
      props:{
        weekendList:{
          type:Array,
          default:[]
        }
      },
      data(){
          return{

          }
      }
    }
</script>

<style scoped lang="stylus" >
  @import "~styl/var.styl"

  .wekit
    h1
      line-height .8rem
      font-size .3rem
      background #eaeaea
      padding-left .2rem
    .wekit_img
      width 100%
      display block
    .wekit_name
      padding-top .2rem
      padding-left .2rem
      line-height .5rem
    .wekit_dec
      padding-left .2rem
      line-height .46rem
      font-size .24rem
      ellipsis()

</style>

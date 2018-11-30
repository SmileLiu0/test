<template>
    <div class="recommend">
      <h1>猜你喜欢</h1>
      <router-link class="recomment_conent border"
           tag="div"
           v-for="(item,index) in recommendList"
           :key="item.id"
           :to="'/dection/' + item.id"
      >
        <div class="recomment_l">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="recomment_r">
          <div class="span_name" v-text="item.title"></div><br>
          <div class="span_dec" v-text="item.desc"></div><br>
          <div class="span_price"><em>¥</em><i v-text="item.id"></i>起</div>
        </div>
      </router-link>
    </div>
</template>
<script>

    export default {
        name: "Recommend",
      props:{
        recommendList:{
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

<style scoped lang="stylus">
  @import "~styl/var.styl"

  .recommend
    h1
      line-height .8rem
      font-size .3rem
      background #eaeaea
      padding-left .2rem


    .recomment_conent
      overflow hidden
      height 1.9rem
      display flex
      padding .2rem
      .recomment_l
        flex 0 0 2rem
        img
         display block
         width 100%
      .recomment_r
        text-align left
        padding .2rem
        flex 1
        min-width 0
        .span_name
          font-size .3rem;
          line-height .30rem
        .span_dec
          font-size .26rem
          line-height .30rem
          ellipsis()
        .span_price em
          font-size .2rem
          color red
        .span_price i
          font-size .38rem
          color red


</style>

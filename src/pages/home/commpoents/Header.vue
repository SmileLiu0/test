<template>
    <div class="header">
      <span class="h_l_icon iconfont icon-fanhui"></span>
      <div class="header_serch">
        <i class="iconfont icon-sousuo"></i>
        <input placeholder="输入城市/景点/游玩主题"/>
      </div>
      <router-link to="/city">
      <span class="h_r_icon">
        {{this.city}}
        <i class="iconfont icon-triangle-bottom"></i>
      </span>
      </router-link>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
        name: "Header",
      computed:{
        ...mapState(['city'])
        //mapzState 映射在组件里面 city的计算属性之中
      }
    }
</script>

<style scoped lang="stylus">
  @import "~styl/var.styl"
 .header
    height .66rem
    background $bgColor
    width 100%
    display flex
    padding .2rem 0
    line-height .66rem
    .h_l_icon
      width .64rem
      float left
      color white
      text-align center
    .h_r_icon
      min-width 1.2rem
      float right
      color #fff
      padding-left .1rem
    .header_serch
      flex 1
      position relative
      input
        width 100%
        border-radius .06rem
        height 100%
        padding-left .45rem
        font-size .16rem
        box-sizing border-box
      i
        position absolute
        left 0
        top 0
        color #999
        padding-left .1rem


</style>

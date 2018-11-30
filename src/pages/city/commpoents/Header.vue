<template>
    <div class="header">
      <div class="city-header">
        <i class="iconfont icon-fanhui header-l" @click="back"></i>城市选择
      </div>

    </div>
</template>

<script>

    export default {
        name: "Header",

      methods:{
        back(){
          this.$router.go(-1)
        },

      }
    }
</script>

<style scoped lang="stylus">
  @import "~styl/var.styl"
  .city-header
    height 1rem
    background $bgColor
    text-align center
    color #ffffff
    line-height 1rem
    position relative
    .header-l
      position absolute
      left .1rem
      top 0
  .ardess
    background $bgColor
    height 1rem
    color #fff
    display flex
    justify-content center
    align-items center
    .ard
      border 1px solid #ffffff
      width 2.5rem;
      text-align center
      height .5rem
      line-height .5rem
    .ard.active
      background white
      color $bgColor

</style>

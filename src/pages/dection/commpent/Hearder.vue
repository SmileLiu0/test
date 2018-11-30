<template>
    <div class="header">
      <!--第一个远点 刚开始显示-->
      <router-link tag="div" to="/" class="header-abs" v-show="showTag">
        <span class="header-icon iconfont icon-fanhui"></span>
      </router-link>

      <!--第二个圆点 刚开始隐藏-->
      <div class="header-flex" v-show="!showTag"
           :style="opactiyStyle"
      >
        <div class="city-header">
          <i class="iconfont icon-fanhui header-l" @click="back"></i>景点详情
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Hearder",
      data(){
        return{
          showTag:true,
          opactiyStyle:{
            opacity:0
            //渐隐渐显
          }
        }
      },
      methods:{
        back(){
          this.$router.go(-1)
        },
        handleScroll(){
          const Stop=document.documentElement.scrollTop
          if (Stop > 60){
            let opacity=Stop/140
            opacity = opacity > 1 ? 1 : opacity
            this.showTag=false
            this.opactiyStyle={opacity}
          } else {
            this.showTag=true
          }
        }
      },


      //有一个监听事件activated 在缓冲的时候
     activated(){
      window.addEventListener('scroll',this.handleScroll)
     },
      //解绑
     deactivated(){
         window.removeEventListener('scroll',this.handleScroll)
     }
    }
</script>

<style scoped lang="stylus">
@import "~styl/var.styl"
  .header-abs
    position absolute
    width .7rem
    height .7rem
    border-radius 50%
    background #333333
    top .3rem
    left .3rem
    right 0
    text-align center
  .header-icon
    color #fff
    height .7rem
    line-height .7rem
  .header-flex
    z-index 2
    width 100%
    position fixed
    top 0
    left 0
    right 0
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
  .contner
    height 50rem

</style>

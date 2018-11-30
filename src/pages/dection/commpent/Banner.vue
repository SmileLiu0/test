<template>
  <div>
    <div class="banner" @click="handleGerryClick">
      <div class="banner-img">
        <img :src="this.bannerImg" alt="">
        <div class="banner-desc">
          <div class="banner-titile">{{this.sightName}}</div>
          <div class="banner-number">
            <i class="iconfont icon-tupian"></i>
            {{this.gallaryImgs.length}}
          </div>
        </div>
      </div>
    </div>
    <!--轮播组件-->
    <fade>
    <gerlly v-show="gerrllyShow" @close="handleClose" :gallaryImgs="gallaryImgs"></gerlly>
    </fade>
  </div>
</template>

<script>
  import Gerlly from '../../commpent/gerlly/Gerlly'
  import Fade from '../../commpent/fade/Fade'

  export default {
        name: "Banner",
      props:{
        bannerImg:String,
        sightName:String,
        gallaryImgs:Array
      },
      data(){
        return{
          imgs:[
            'http://img1.qunarzz.com/sight/p0/1709/bf/bfe91441ab865b2ea3.img.jpg_r_800x800_dc97aa3d.jpg',
            'http://img1.qunarzz.com/sight/p0/1709/12/12cd82e516121596a3.img.jpg_r_800x800_0f3d614f.jpg'
          ],
          gerrllyShow:false
        }
      },
      methods:{
        handleGerryClick (){
          this.gerrllyShow=true
        },
        handleClose(){
          this.gerrllyShow=false
        }
      },
      components:{
        Gerlly,
        Fade
      }
    }
</script>

<style scoped lang="stylus">

.banner-img{
  padding-bottom: 55.5%;
  height: 0;
  overflow hidden
  position relative
  img{
    width 100%
    display block
  }
  .banner-desc{
    position absolute
    bottom 0
    left 0
    right 0
    display flex
    line-height .6rem
    color #fff
    padding 0 .4rem
    background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
    justify-content space-between
    .banner-titile{
      flex 1
    }

  }
}
</style>

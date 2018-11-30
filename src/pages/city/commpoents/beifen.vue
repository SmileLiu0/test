<template>
  <div class="adress " ref="wrapper" >

    <div class="conents">

      <div class="adress-dq">
        <div class="dq-title border">当前城市</div>
        <div class="dq-city">
          <ul class="dq-ul">
            <li>安阳</li>
          </ul>
        </div>
      </div>

      <div class="adress-dq">
        <div class="dq-title border">热门城市</div>
        <div class="rm-rm">

          <div class="re-city" v-for="(item,index) in hotCities" :key="index">
            <div class="re-item">{{item.name}}</div>
          </div>
        </div>
      </div>

      <div class="adress-dq" v-for="(itemz, key) in cities" :key="key">
        <div class="dq-title border">{{key}}</div>
        <ul class="adress-z" >
          <li class="adress-li border-bottom"
              v-for="listitem in itemz"
          >{{listitem.name}}</li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Adress",
    props:{
      hotCities:{
        type:Array,
        default:[]
      },
      cities:{
        type:Object,
        default: {}
      }
    },
    created(){
      // this.scroll=new BScroll(this.$refs.wrapper)



      this.$nextTick(()=>{
        //异步
        if (!this.scroll){
          this.scroll=new BScroll(this.$refs.wrapper,{
            scrollY: true,
            hasVerticalScroll:true,
            //开启点击事件
            click:true

          });
          console.log(this.scroll)

        }
        else {

          this.scroll.refresh();
        }

      })
    }
  }
</script>

<style scoped lang="stylus">
  .adress
    position absolute
    overflow hidden
    top 2rem;
    left 0;
    right 0;
    bottom 0
    .adress-dq
      overflow hidden
      .re-city
        width 30%
        float left
        margin .1rem

      .re-item


        line-height .6rem
        text-align center
        border 1px solid #cacaca
        border-radius .05rem
      .dq-title
        height .6rem
        line-height .6rem
        background #eee
        padding-left .2rem
      .rm-rm
        padding .2rem .6rem .2rem .2rem
        overflow hidden

      .adress-z
        padding 0
      .adress-li
        height .7rem;
        line-height .7rem
        padding-left .11rem


      .dq-city
        overflow hidden
        .dq-ul
          padding .3rem .6rem .3rem .3rem
          overflow hidden
          li
            width 31%
            border 1px solid #cacaca
            float left
            height .6rem
            line-height .6rem
            margin 0.1rem .05rem
            border-radius .1rem
            text-align center


</style>

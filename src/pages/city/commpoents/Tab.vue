<template>
  <div class="adress">
    <div class="ardess">
      <div class="ard" :class="{'active':togel === 'Adress'}" @click="currenTab('Adress')">境内</div>
      <div class="ard" :class="{'active':togel === 'Hk'}" @click="currenTab('Hk')">境外港澳</div>
    </div>
    <keep-alive>
      <component :is="togel"></component>
    </keep-alive>
  </div>
</template>

<script>
  import Adress from '../commpoents/Adress'
  import Hk from '../commpoents/Hk'
    export default {

      data(){
        return{
          togel:'Adress'
        }
      },
        name: "Tab",
      components:{
        Adress,
        Hk
      },methods:{
        currenTab(tab){
          this.togel=tab
        }
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

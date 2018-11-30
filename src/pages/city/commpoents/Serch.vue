<template>
  <div>
    <div class="search">
      <input placeholder="请输入您想去的城市" v-model="keyword"/>
    </div>
    <div class="search-list" v-show="keyword" ref="srarchlist">
      <ul>
        <li class="list-item border-bottom"
            v-for="item in list"
            @click="handleCity(item.name)"
        >{{item.name}}</li>

        <li class="list-item border-bottom" v-show="finNodata"

        >对不起 没有搜到关键字！</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import { mapState,mapMutations } from 'vuex'
     export default {
        name: "Serch",
      methods:{
        handleCity(city){
          // this.$store.commit('changCity',city);
          this.changCity(city)
          this.$router.push('/')

        },
        ...mapMutations(['changCity'])
      },
      computed:{
        finNodata(){
          return !this.list.length
        }
      },
      data(){
          return{
            keyword:'',
            list:[],
            timer:null
          }
      },
      props:{
        cities:{
          type:Object,
          default:{}

        }
      },

      watch:{
        keyword(){

          if(this.timer){
           clearTimeout(this.timer)
          }
          this.timer=setTimeout(()=>{
            if(!this.keyword){
              this.list=[]
              return
            }
            const reslut=[];
            for (let i in this.cities){
              this.cities[i].forEach((value)=>{
                if(value.spell.indexOf(this.keyword)>-1||
                  value.name.indexOf(this.keyword)>-1){
                  reslut.push(value);
                }
              })
              this.list=reslut;

            }

          },100)



        }
      },
      mounted(){

        this.scroll= new Bscroll(this.$refs.srarchlist)

    },

    }
</script>

<style scoped lang="stylus">
  .search
    background #25a4bb
    height .6rem
    line-height .6rem
    padding  .2rem .4rem
    display flex

    input
      border-radius .05rem
      flex 1
      text-align center
  .search-list
    position absolute
    top 2rem
    left 0
    right 0
    bottom 0
    z-index 999
    background #eaeaea
    .list-item
      background #ffffff
      line-height .8rem
      padding-left .1rem



</style>

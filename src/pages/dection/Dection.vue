<template>
    <div class="dection">
      <banner :bannerImg="bannerImg" :sightName="sightName" :gallaryImgs="gallaryImgs"></banner>
      <hearder></hearder>
      <list :list="list"></list>
      <div class="conter"></div>
    </div>
</template>

<script>
  import Banner from '../dection/commpent/Banner'
  import Hearder from '../dection/commpent/Hearder'
  import List from '../dection/commpent/List'
  import axios from 'axios'
  export default {
        name: "Dection",
      data(){
        return{
          bannerImg:'',
          list:[],
          gallaryImgs:[],
          sightName:''
        }
      },
    mounted(){
      this.getInfo()
    },
    methods:{
      getInfo(){
        axios.get('/api/detail.json?id=' + this.$route.params.id)
          .then(this.getInScuss)
      },
      getInScuss(res){
        res=res.data;
        if (res.ret && res.data){
          const data=res.data;
          this.bannerImg=data.bannerImg;
          this.list=data.categoryList;
          this.gallaryImgs=data.gallaryImgs;
          this.sightName=data.sightName
        }

        console.log(res)
      }
    },
      components:{
        Banner,
        Hearder,
        List
      }

    }
</script>

<style scoped>
  .conter{ height:  50rem}

</style>

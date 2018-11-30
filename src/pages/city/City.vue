<template>
    <div class="city">
      <city-header></city-header>
      <serch :cities="cities"></serch>
      <adress :hotCities="hotCities" :cities="cities" :letter="letter"></adress>
      <aphle :cities="cities" @change="handleFo"></aphle>
    </div>
</template>

<script>
  import CityHeader from './commpoents/Header'
  import Serch from './commpoents/Serch'
  import Tab from './commpoents/Tab'
  import Adress from './commpoents/Adress'
  import axios from 'axios'
  import Aphle from './commpoents/Aphle'
    export default {
        name: "City",
      data(){
        return{
          hotCities:[],//热门城市
          cities:{},//字母表
          letter:''
        }
      },
      components:{
        CityHeader,
        Serch,
        Tab,
        Adress,
        Aphle
      },
      methods:{
        getCity(){
          axios.get('/api/city.json').
          then(this.getCitySucc);
        },
        getCitySucc(res){
          res=res.data;
          if(res.ret && res.data){
            this.hotCities=res.data.hotCities;
            this.cities=res.data.cities;

          }
          //console.log(res.data.cities)
        },
        handleFo(letter){
          this.letter=letter;
        }
      },
      created(){
          this.getCity();
      }
    }
</script>

<style scoped>

</style>

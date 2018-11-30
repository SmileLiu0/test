<template>
  <div class="tt">
    <div class="tabs">
      <div class="tab" @click="currenTab('prince')">彬彬</div>
      <div class="tab" @click="currenTab('rose')">瑞瑞</div>
      <div class="tab" @click="currenTab('fox')">狗头</div>
    </div>
    <keep-alive>
      <component :is="tabs"></component>
    </keep-alive>
  </div>
</template>

<script>
  // 倒入组件 这个好处就是 不在一个 页面显示
  import prince from '../tab/prince'
  import rose from '../tab/rose'
  import fox from '../tab/fox'
    export default {
        name: "Tab",
      data(){
          return{
            tabs:'prince'
          }
      },
      components:{
        prince,
        rose,
        fox

      },
      methods:{

        currenTab(tab){

          this.tabs=tab
        }
      }
    }
</script>

<style scoped>
.tabs{
  display: flex;

  justify-content: center;
}
  .tab{
    flex: 1;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
  }
.tab.active{
  color: #25a4bb;
  border-bottom: 2px solid #25a4bb;
}
</style>

<template>
    <div class="list">
      <div v-for="(item,index) in list">
        <!--必须在一个 item里面-->
      <div class="item-list border-bottom"
      :key="index">
        <span class="item-icon"></span>
        {{item.title}}
      </div>
        <!--这是循环第一曾-->


        <!--这是第二层 先看是否有 下一项 如果有  就循环 调用自己的组件 在传给自己 list-->
        <div v-if="item.children" class="item-children">
          <list :list="item.children"></list>
        </div>

      </div>
    </div>
</template>

<script>
    import Dection from "../Dection";
    export default {
        name: "List",
      components: {Dection},
      props:{
        list:Array,
      }
    }
</script>

<style scoped>
.item-list{
  line-height: .68rem;
  padding-left: .6rem;
}
  .item-icon{
    display: inline-block;
    position: absolute;
    width: .36rem;
    height: .36rem;
    top: .18rem;
    left: .2rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
  }
  .item-children{
    padding-left: .5rem;
  }
</style>

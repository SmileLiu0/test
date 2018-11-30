<template>
    <div class="aphle">
      <div class="aphle-font">
        <div class="aphle-item"
             v-for="(item,key) in cities"
             @click="handleLetter"
        >{{key}}</div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "Aphle",
      props:{
        cities:Object
      },
      methods:{
        handleLetter(e){
          this.$emit('change',e.target.innerHTML)
        }
      }
    }
</script>

<style scoped lang="stylus">

.aphle
  z-index 888
  position absolute
  top 2rem
  width .4rem
  right 0;
  bottom 0
  display flex
  flex-direction column
  justify-content center
  .aphle-item
    text-align center
    line-height .4rem
    color #25a4bb

</style>

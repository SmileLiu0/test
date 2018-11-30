<template>
    <div>
      <transition>
        <slot></slot>
      </transition>
    </div>
</template>

<script>
    export default {
        name: "Fade"
    }
</script>

<style scoped>
  .v-enter {
    opacity: 0;
  }
  .v-enter-active{
    transition: opacity 1s;
  }
  .v-leave-active{
    transition: all 0.3s;
    opacity: 0;
  }
</style>

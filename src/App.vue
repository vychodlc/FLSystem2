<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  // import Home from '@/views/home/index.vue';
  export default {
    name: 'App',
    // components: { Home },
  }
</script>

<style scoped>
  @import "assets/css/base.css";
  #app {
    width: 100vw;
    height: 100vh;
    position: relative;
  }
  .content {
    position: fixed;
    left: 200px;
    top: 60px;
    background-color: #fff;
    width: calc(100vw - 200px);
    height: calc(100vh - 60px);
    z-index: 100;
  }
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {}
    },
  }
</script>

<style lang="less">
  
  @font-face {
    font-family: 'DejaVuSansMono';
    src: url("./assets/fonts/dejavu-sans-mono/DejaVuSansMono.ttf");
  }
  
  html, body {
    height: 100%;
    margin: 0;
    padding: 0 0;
    background-color: #FFF;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-overflow-scrolling: touch;
    -webkit-touch-callout: none;
  }
  
  #app {
    padding: 0;
  }
  
</style>

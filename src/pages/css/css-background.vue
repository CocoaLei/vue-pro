<template>
  <div class="page css-page">
    <div>
      <div class="background-position"/>
    </div>
    <div>
      <div class="background-origin"/>
    </div>
    <div>
      <div class="background-calc"/>
    </div>
  </div>
</template>

<script>
  export default {
  
  };
</script>

<style lang="less" scoped>
  @import "~@/style/common";
  
  .css-page {
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      & > div {
        margin: @contentEdge auto;
      }
    }
    .background-position {
      height: 20vh;
      width: 40vw;
      /* background: <attachment> <bg-image> <position> <bg-size> <repeat-style>*/
      background: url("~@/assets/rectangle.png") no-repeat #F5F5F5;
      /* background-position 设置的偏移是以 padding-box 为基准的*/
      background-position: left 10px top 10px;
      /* 通过设置 background-origin 来更改 background-position 的基准*/
      background-origin: content-box;
    }
    .background-origin {
      height: 20vh;
      width: 40vw;
      /* background: <attachment> <bg-image> <position> <bg-size> <repeat-style>*/
      background: url("~@/assets/rectangle.png") no-repeat #F5F5F5;
      padding: 10px 0 0 10px;
      background-origin: content-box;
    }
    .background-calc {
      height: 20vh;
      width: 40vw;
      /* background: <attachment> <bg-image> <position> <bg-size> <repeat-style>*/
      background: url("~@/assets/rectangle.png") no-repeat #F5F5F5;
      background-position: bottom calc(100% - 10px) left (100% - 10px);
    }
  }
</style>

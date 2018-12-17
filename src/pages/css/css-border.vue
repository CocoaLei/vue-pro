<template>
  <div class="page css-page">
    <div>
      <div class="translucence-border"/>
    </div>
    <div>
      <div class="muti-border"/>
    </div>
    <div>
      <div class="outline-border"/>
    </div>
    <div>
      <div class="dashed-outline-border"/>
    </div>
    <div>
      <div class="inner-radius-button"/>
    </div>
    <div>
      <div class="image-border"/>
    </div>
    <div>
      <div class="letter-border"/>
    </div>
    <div>
      <div class="ant-marching-border"/>
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
    background-color: #F5F5F5;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      & > div {
        margin: @contentEdge auto;
      }
    }
    .translucence-border {
      height: 20vh;
      width: 40vw;
      background-color: #FFF;
      /*默认情况下，背景会延伸到边框所在的区域下层*/
      border: 10px solid hsla(0, 0%, 100%, .5);
      /*默认是按照 border-box 来裁切背景*/
      background-clip: padding-box;
    }
    .muti-border {
      height: 20vh;
      width: 40vw;
      background-color: #FFF;
      /* box-shadow : offset-x | offset-y | blur-radius | spread-radius | color */
      /* 如果需要投影绘制在元素的内圈，加上 inset 关键字即可*/
      box-shadow: 0 0 0 10px #655, 0 0 0 15px #222;
    }
    /*需要注意的是，边框不会贴合 border-radius 产生的圆角*/
    .outline-border {
      height: 20vh;
      width: 40vw;
      background-color: #FFF;
      box-shadow: 0 0 0 10px #655;
      outline: 5px solid #222;
      outline-offset: 10px;
    }
    .dashed-outline-border {
      height: 20vh;
      width: 40vw;
      background-color: #FFF;
      box-shadow: 0 0 0 10px #655;
      outline: 1px dashed #FFF;
      outline-offset: 5px;
    }
    /* outline 并不会跟随 border-radius ，而 box-shadow 却会 */
    .inner-radius-button  {
      height: 20vh;
      width: 40vw;
      background-color: #FFF;
      border-radius: .8em;
      padding: 1em;
      box-shadow: 0 0 0 .6em #655;
      outline: .7em solid #222;
    }
    /* 图片边框 */
    .image-border {
      height: 120px;
      width: 120px;
      padding: 1em;
      border: 1em solid transparent;
      background: linear-gradient(white, white) padding-box, url("~@/assets/bg-b.svg") border-box 0 ~'/' cover;
      /*background: linear-gradient(transparent, transparent) padding-box, url("~@/assets/bg-b.svg") border-box 0 / cover; */
      /*background-size: 100%;*/
      /*background-clip: padding-box, border-box;*/
       /*默认是以 padding-box 来定位背景的 */
      background-origin: border-box;
    }
    .letter-border {
      height: 120px;
      width: 120px;
      padding: 1em;
      border: 16px solid transparent;
      border-image: 16 repeating-linear-gradient(-45deg, red 0, red 1em, transparent 0, transparent 2em, #58a 0, #58a 3em, transparent 0, transparent 4em);
    }
  
    @keyframes ants { to { background-position: 100% 100% } }
    .ant-marching-border {
      height: 120px;
      width: 120px;
      padding: 1em;
      border: 1px solid transparent;
      background: linear-gradient(white, white) padding-box,
      repeating-linear-gradient(-45deg, black 0, black 25%, transparent 0, transparent 50%) 0 ~'/' .6em .6em;
      animation: ants 12s linear infinite;
    }
  }
</style>

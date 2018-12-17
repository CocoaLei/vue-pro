<template>
  <div class="page css-page">
    <div>
      <div class="linear-gradient"/>
    </div>
    <div>
      <div class="stripes-background"/>
    </div>
    <div>
      <div class="vertical-stripes-background"/>
    </div>
    <div>
      <div class="slant-stripes-background"/>
    </div>
    <div>
      <div class="isogyre-slant-stripes-background"/>
    </div>
    <div>
      <div class="grids-background"/>
    </div>
    <div>
      <div class="blueprint-background"/>
    </div>
    <div>
      <div class="dot-background"/>
    </div>
    <!--chessboard-->
    <div>
      <div class="chessboard-background"/>
    </div>
    <div>
      <div class="chessboard-conic-background"/>
    </div>
    <div>
      <div class="pseudorandom-background"/>
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
    .linear-gradient {
      height: 20vh;
      width: 40vw;
      /* 线性渐变的轴线初始为 180 , 角度为轴线顺时针旋转与初始轴之间的夹角 */
      /* 如果指定为 0 ，则是 从 top 至 bottom 的渐变*/
      background: linear-gradient(-90deg, blue 50%, yellow 0);
      /*background: linear-gradient(to right top, blue 50%, yellow 0);*/
    }
    .stripes-background {
      height: 20vh;
      width: 40vw;
      /* linear-gradient() 函数生成一个颜色渐变图像 slant */
      background: linear-gradient(blue 1vh, green 0);
      background-size: 100% 2vh;
    }
    .vertical-stripes-background {
      height: 20vh;
      width: 40vw;
      background: linear-gradient(to right,blue 1vh, green 0); // or linear-gradient(90deg, blue 1vh, green 0)
      background-size: 2vh 100%;
    }
    .slant-stripes-background {
      height: 20vh;
      width: 40vw;
      /*background: linear-gradient(45deg, blue 25%, green 0, green 50%, blue 0, blue 75%, green 0);*/
      /*background-size: 2vh 2vh;*/
      /* repeat-linear-gradient 的色标是无限重复的，直到填满整个背景 */
      background: repeating-linear-gradient(45deg, blue, green 1vh, blue 0, green 2vh);
      background-size: sqrt(2)vh sqrt(2)vh;
    }
    .isogyre-slant-stripes-background {
      height: 20vh;
      width: 40vw;
      background: #58a;
      /* 不再为每种条纹单独指定颜色，而是把最深的颜色指定为背景色，同时把半透明白色的条纹叠加在背景色之上来 得到浅色条纹 */
      background-image: repeating-linear-gradient(45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 30px);
    }
    .grids-background {
      height: 20vh;
      width: 40vw;
      background: #58a;
      background-image: linear-gradient(90deg, rgba(255, 255, 255, .5) 1px, transparent 0), linear-gradient(rgba(255, 255, 255, .5) 1px, transparent 0);
      background-size: 2vh 2vh;
    }
    .dot-background {
      height: 20vh;
      width: 40vw;
      background: #655;
      background-image: radial-gradient(tan 30%, transparent 0), radial-gradient(tan 30%, transparent 0);
      background-size: 2vh 2vh;
      background-position: 0 0, 1vh 1vh;
    }
    .chessboard-background {
      height: 20vh;
      width: 40vw;
      background: #eee;
      background-image:
        linear-gradient(45deg, #bbb 25%, transparent 0),
        linear-gradient(45deg, transparent 75%, #bbb 0),
        linear-gradient(45deg, #bbb 25%, transparent 0),
        linear-gradient(45deg, transparent 75%, #bbb 0);
      background-position: 0 0, 1vh 1vh, 1vh 1vh, 2vh 2vh;
      background-size: 2vh 2vh;
    }
    /*暂不可用*/
    /*.chessboard-conic-background {*/
      /*height: 120px;*/
      /*width: 120px;*/
      /*!*background: #FFF;*!*/
      /*background: repeating-conic-gradient(#bbb 0, #bbb 25%, #eee 0, #eee 50%);*/
      /*background-size: 2vh 2vh;*/
    /*}*/
    .pseudorandom-background {
      height: 20vh;
      width: 40vw;
      background: linear-gradient(to right, #fb3 15%, #655 0, #655 40%, #ab4 0, #ab4 65%, hsl(20, 40%, 90%) 0);
      background-size: 4vw 100%;
    }
  }
</style>

<template>
  <div class="page css-page">
    <div>
      <div class="shape-ellipse"/>
    </div>
    <div>
      <div class="shape-half-ellipse"/>
    </div>
    <div>
      <div class="shape-rhomboid">
        <p>shape rhomboid</p>
      </div>
    </div>
    <div>
      <div class="shape-rhombus">
        <img src="@/assets/fk.png">
      </div>
    </div>
    <div>
      <div class="shape-boken-corner"/>
    </div>
    <div>
      <div class="shape-boken-corner-svg"/>
    </div>
    <div>
      <div class="shape-curved-corner"/>
    </div>
    <div>
      <div class="shape-trapezoid"/>
    </div>
    <div>
      <div class="shape-pie"/>
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
    .shape-ellipse {
      height: 20vh;
      width: 80vw;
      background-color: #58a;
      border-radius: 50%;
    }
    .shape-half-ellipse {
      height: 20vh;
      width: 80vw;
      background-color: #58a;
      border-radius: 50% ~'/' 100% 100% 0 0;
    }
    .shape-rhomboid {
      position: relative;
      height: 120px;
      width: 240px;
      background-color: #58a;
      p {
        color: #FFF;
        z-index: 1;
      }
    }
    .shape-rhomboid:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      /*z-index: 1;*/
      background: #58a;
      transform: skew(-15deg);
    }
    .shape-rhombus {
      width: 240px;
      overflow: hidden;
      &>img {
        max-width: 100%;
        clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
        transition: 1s clip-path;
      }
      &>img:hover {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
    }
    .shape-boken-corner {
      height: 20vh;
      width: 40vw;
      background-color: #58a;
      background:
        linear-gradient(135deg, transparent 15px, #58a 0) top left,
        linear-gradient(-135deg, transparent 15px, #58a 0) top right,
        linear-gradient(-45deg, transparent 15px, #58a 0) bottom right,
        linear-gradient(45deg, transparent 15px, #58a 0) bottom left;
      background-size: 51% 51%;
      background-repeat: no-repeat;
    }
    .shape-boken-corner-svg {
      height: 20vh;
      width: 40vw;
      background-color: #58a;
      border: 10px solid #58a;
      border-image: 1 url('data:image/svg+xml,\
	                      <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" fill="%2358a">\
	                      <polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2" />\
	                      </svg>');
      background: #58a;
      background-clip: padding-box;
    }
    .shape-curved-corner {
      height: 20vh;
      width: 40vw;
      background-color: #58a;
      background:
        radial-gradient(circle at top left, transparent 15px, #58a 0) top left,
        radial-gradient(circle at top right, transparent 15px, #58a 0) top right,
        radial-gradient(circle at bottom left, transparent 15px, #58a 0) bottom left,
        radial-gradient(circle at bottom right, transparent 15px, #58a 0) bottom right;
      background-size: 60% 60%;
      background-repeat: no-repeat;
    }
    .shape-trapezoid {
      position: relative;
      height: 20vh;
      width: 40vw;
      /*background-color: #58a;*/
    }
    .shape-trapezoid::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 0;
      background: #58a;
      transform: perspective(.5em) rotateX(1deg);
      transform-origin: bottom;
    }
    @keyframes spin {
      to { transform: rotate(.5turn); }
    }
    @keyframes bg {
      50% { background: #655; }
    }
    .shape-pie {
      height: 20vh;
      width: 20vh;
      background-color: #58a;
      border-radius: 50%;
      background-image: linear-gradient(to right, transparent 50%, #655 0);
      overflow: hidden;
      animation-delay: -100s;
      &:before {
        content: '';
        display: block;
        width: 50%;
        margin-left: 50%;
        height: 100%;
        background-color: inherit;
        border-radius: 0 100% 100% 0 ~'/' 50%;
        transform-origin: left;
        transform: rotate(.1turn);
        border-radius: 0;
        animation: spin 50s linear infinite, bg 100s step-end infinite;
        animation-delay: inherit;
        animation-play-state: paused;
      }
    }
  }
</style>

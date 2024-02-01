<template>
  <div>
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
  </div>
</template>

<script>
  export default {
    name: 'BackgroundCircles'
  }
</script>

<style>
  @keyframes rotateContinuously {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes moveLeftRight {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50px);
  }
}

@keyframes moveUpDown {
  0%, 100% {
    transform: translateY(0);
    width: 300px;
    height: 300px;
  }
  25%, 75% {
    transform: translateY(-25px);
    width: 270px;
    height: 270px;
  }
  50% {
    transform: translateY(-50px);
    width: 280px;
    height: 280px;
  }
}

.circle1 {
  height: 300px;
  width: 300px;
  background: rgb(131, 25, 214);
  background: linear-gradient(90deg, rgba(131, 25, 214, 1) 0%, rgba(25, 142, 214, 1) 52%, rgba(18, 205, 177, 1) 100%);
  position: absolute;
  border-radius: 200px;
  margin-left: 400px;
  margin-top: 350px;
  -webkit-box-shadow: 0px 0px 92px 6px rgba(0, 255, 255, 0.35);
  -moz-box-shadow: 0px 0px 92px 6px rgba(0, 255, 255, 0.35);
  box-shadow: 0px 0px 92px 6px rgba(0, 255, 255, 0.35);
  animation: moveUpDown 50s ease-in-out infinite;
}

.circle2 {
  height: 1000px;
  width: 1000px;
  left: 0;
  background: rgb(255, 137, 58);
  background: linear-gradient(190deg, rgba(255, 137, 58, 1) 0%, rgba(173, 53, 193, 1) 23%, rgba(32, 37, 41, 1) 80%);
  position: absolute;
  border-radius: 1000px;
  margin-left: -600px;
  margin-bottom: -750px;
  -webkit-box-shadow: 0px 0px 92px 6px rgba(255, 0, 247, 0.35);
  -moz-box-shadow: 0px 0px 92px 6px rgba(255, 0, 247, 0.35);
  box-shadow: 0px 0px 92px 6px rgba(255, 0, 247, 0.35);
  animation: rotateContinuously 2s linear infinite, moveLeftRight 20s ease-in-out infinite;
}

.circle3 {
  height: 600px;
  width: 600px;
  background: rgb(255, 137, 58);
  background: linear-gradient(190deg, rgba(255, 137, 58, 1) 0%, rgba(173, 53, 193, 1) 23%, rgba(32, 37, 41, 1) 80%);
  position: absolute;
  right: 0;
  margin-left: -200px;
  border-radius: 700px;
  margin-top: -500px;
  -webkit-box-shadow: 0px 0px 92px 6px rgba(255, 0, 247, 0.35);
  -moz-box-shadow: 0px 0px 92px 6px rgba(255, 0, 247, 0.35);
  box-shadow: 0px 0px 92px 6px rgba(255, 0, 247, 0.35);
  animation: rotateContinuously 2s linear infinite, moveLeftRight 30s ease-in-out infinite;
}
</style>
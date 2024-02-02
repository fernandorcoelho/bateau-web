<template>
<div class="background">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
</template>

<script>
export default {
  name: 'BackgroundCirclesAlt'
}
</script>

<style>
@keyframes move {
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
}

.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: transparent;
  overflow: hidden;
}

.background span {
  width: 20vmin;
  height: 20vmin;
  border-radius: 20vmin;
  backface-visibility: hidden;
  position: absolute;
  animation: move;
  animation-duration: 36;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.background span:nth-child(0) {
  color: #ff7450;
  top: 11%;
  left: 7%;
  animation-duration: 34s;
  animation-delay: -26s;
  transform-origin: -2vw 7vh;
  box-shadow: -40vmin 0 5.667083963194664vmin currentColor;
}

.background span:nth-child(1) {
  color: #ff7450;
  top: 55%;
  left: 26%;
  animation-duration: 92s;
  animation-delay: -119s;
  transform-origin: -17vw -2vh;
  box-shadow: 40vmin 0 5.188700389279969vmin currentColor;
}

.background span:nth-child(2) {
  color: #ff7450;
  top: 53%;
  left: 98%;
  animation-duration: 18s;
  animation-delay: -113s;
  transform-origin: -9vw 12vh;
  box-shadow: -40vmin 0 5.539478278063395vmin currentColor;
}

.background span:nth-child(3) {
  color: #ff7450;
  top: 40%;
  left: 9%;
  animation-duration: 6s;
  animation-delay: -10s;
  transform-origin: -12vw 16vh;
  box-shadow: -40vmin 0 5.998081243071182vmin currentColor;
}

.background span:nth-child(4) {
  color: #5c2088;
  top: 71%;
  left: 70%;
  animation-duration: 63s;
  animation-delay: -14s;
  transform-origin: 5vw 15vh;
  box-shadow: -40vmin 0 5.971780603462481vmin currentColor;
}

.background span:nth-child(5) {
  color: #5c2088;
  top: 67%;
  left: 40%;
  animation-duration: 55s;
  animation-delay: -41s;
  transform-origin: 3vw -24vh;
  box-shadow: -40vmin 0 5.008915539202376vmin currentColor;
}

.background span:nth-child(6) {
  color: #ff7450;
  top: 28%;
  left: 51%;
  animation-duration: 84s;
  animation-delay: -70s;
  transform-origin: 16vw -21vh;
  box-shadow: -40vmin 0 5.171480928306304vmin currentColor;
}

.background span:nth-child(7) {
  color: #5c2088;
  top: 73%;
  left: 29%;
  animation-duration: 88s;
  animation-delay: -99s;
  transform-origin: 14vw -7vh;
  box-shadow: -40vmin 0 5.296975818540148vmin currentColor;
}

.background span:nth-child(8) {
  color: #b137db;
  top: 95%;
  left: 30%;
  animation-duration: 139s;
  animation-delay: -37s;
  transform-origin: 11vw 18vh;
  box-shadow: -40vmin 0 5.151572297530185vmin currentColor;
}

.background span:nth-child(9) {
  color: #ff7450;
  top: 78%;
  left: 56%;
  animation-duration: 135s;
  animation-delay: -117s;
  transform-origin: 10vw 25vh;
  box-shadow: 40vmin 0 5.425190148458416vmin currentColor;
}

.background span:nth-child(10) {
  color: #ff7450;
  top: 19%;
  left: 88%;
  animation-duration: 121s;
  animation-delay: -78s;
  transform-origin: -4vw 10vh;
  box-shadow: 40vmin 0 5.1866059908497775vmin currentColor;
}

.background span:nth-child(11) {
  color: #b137db;
  top: 52%;
  left: 57%;
  animation-duration: 72s;
  animation-delay: -25s;
  transform-origin: 20vw -1vh;
  box-shadow: -40vmin 0 5.62271240681215vmin currentColor;
}

.background span:nth-child(12) {
  color: #b137db;
  top: 28%;
  left: 67%;
  animation-duration: 117s;
  animation-delay: -102s;
  transform-origin: 5vw 14vh;
  box-shadow: -40vmin 0 5.953698049911903vmin currentColor;
}

.background span:nth-child(13) {
  color: #ff7450;
  top: 63%;
  left: 76%;
  animation-duration: 141s;
  animation-delay: -72s;
  transform-origin: 16vw -5vh;
  box-shadow: -40vmin 0 5.58106723704516vmin currentColor;
}

.background span:nth-child(14) {
  color: #b137db;
  top: 79%;
  left: 81%;
  animation-duration: 133s;
  animation-delay: -125s;
  transform-origin: -2vw -4vh;
  box-shadow: 40vmin 0 5.28527543990565vmin currentColor;
}

.background span:nth-child(15) {
  color: #5c2088;
  top: 10%;
  left: 36%;
  animation-duration: 79s;
  animation-delay: -91s;
  transform-origin: -4vw -3vh;
  box-shadow: -40vmin 0 5.554907956750611vmin currentColor;
}

.background span:nth-child(16) {
  color: #b137db;
  top: 50%;
  left: 18%;
  animation-duration: 114s;
  animation-delay: -121s;
  transform-origin: 5vw -19vh;
  box-shadow: 40vmin 0 5.819757475512703vmin currentColor;
}

.background span:nth-child(17) {
  color: #b137db;
  top: 59%;
  left: 47%;
  animation-duration: 25s;
  animation-delay: -140s;
  transform-origin: 21vw 24vh;
  box-shadow: -40vmin 0 5.581954735003085vmin currentColor;
}

.background span:nth-child(18) {
  color: #5c2088;
  top: 30%;
  left: 80%;
  animation-duration: 92s;
  animation-delay: -57s;
  transform-origin: -9vw -15vh;
  box-shadow: 40vmin 0 5.790574016774543vmin currentColor;
}

.background span:nth-child(19) {
  color: #b137db;
  top: 78%;
  left: 56%;
  animation-duration: 34s;
  animation-delay: -83s;
  transform-origin: 0vw 22vh;
  box-shadow: 40vmin 0 5.859916079660855vmin currentColor;
}
</style>

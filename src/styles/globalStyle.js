import { injectGlobal } from "styled-components";

/* eslint-disable */
injectGlobal`
:root {
  --primaryColor: #353F60;
  --secondaryColor: #7818DE;
  --thirtyColor: #A10AD5 ;
  --borderColor: #DEE0E2;
  --grayColor: #F6F8FB;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Mada', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.6;
  color: var(--primaryColor);
  background: white;
}

::-webkit-scrollbar{
  width: 5px;
  height: 5px;
  cursor: pointer;
}

::-webkit-scrollbar-track{
  background-color: var(--borderColor);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb{
  background: rgba(var(--primaryColor), .2);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover{
  background: var(--primaryColor) ;
}


/* line 149, ../sass/layout/_grid.scss */
.particle2 {
  position: fixed;
  border-radius: 50%;
}
@keyframes particle-animation-1 {
  100% {
    transform: translate3d(83vw, 66vh, 54px);
  }
}
/* line 161, ../sass/layout/_grid.scss */
.particle2:nth-child(1) {
  animation: particle-animation-1 60s infinite;
  opacity: .95;
  height: 8px;
  width: 8px;
  animation-delay: -0.2s;
  transform: translate3d(11vw, 22vh, 6px);
  background: var(--secondaryColor);
}
@keyframes particle-animation-2 {
  100% {
    transform: translate3d(39vw, 7vh, 48px);
  }
}
/* line 161, ../sass/layout/_grid.scss */
.particle2:nth-child(2) {
  animation: particle-animation-2 60s infinite;
  opacity: .06;
  height: 7px;
  width: 7px;
  animation-delay: -0.4s;
  transform: translate3d(88vw, 14vh, 43px);
  background: #d92650;
}
@keyframes particle-animation-3 {
  100% {
    transform: translate3d(11vw, 9vh, 16px);
  }
}
/* line 161, ../sass/layout/_grid.scss */
.particle2:nth-child(3) {
  animation: particle-animation-3 60s infinite;
  opacity: .64;
  height: 7px;
  width: 7px;
  animation-delay: -0.6s;
  transform: translate3d(21vw, 64vh, 9px);
  background: var(--primaryColor);
}
@keyframes particle-animation-4 {
  100% {
    transform: translate3d(88vw, 21vh, 2px);
  }
}
/* line 161, ../sass/layout/_grid.scss */
.particle2:nth-child(4) {
  animation: particle-animation-4 60s infinite;
  opacity: .66;
  height: 9px;
  width: 9px;
  animation-delay: -0.8s;
  transform: translate3d(78vw, 87vh, 78px);
  background: var(--thirtyColor);
}
@keyframes particle-animation-5 {
  100% {
    transform: translate3d(6vw, 54vh, 78px);
  }
}
/* line 161, ../sass/layout/_grid.scss */
.particle2:nth-child(5) {
  animation: particle-animation-5 60s infinite;
  opacity: 1;
  height: 7px;
  width: 7px;
  animation-delay: -1s;
  transform: translate3d(21vw, 13vh, 3px);
  background: var(--primaryColor);
}
@keyframes particle-animation-6 {
  100% {
    transform: translate3d(12vw, 2vh, 63px);
  }
}
/* line 161, ../sass/layout/_grid.scss */
.particle2:nth-child(6) {
  animation: particle-animation-6 60s infinite;
  opacity: .5;
  height: 9px;
  width: 9px;
  animation-delay: -1.2s;
  transform: translate3d(2vw, 11vh, 25px);
  background: #c726d9;
}
@keyframes particle-animation-7 {
  100% {
    transform: translate3d(22vw, 37vh, 9px);
  }
}
/* line 161, ../sass/layout/_grid.scss */
.particle2:nth-child(7) {
  animation: particle-animation-7 60s infinite;
  opacity: .83;
  height: 9px;
  width: 9px;
  animation-delay: -1.4s;
  transform: translate3d(56vw, 64vh, 46px);
  background: var(--thirtyColor);
}
@keyframes particle-animation-8 {
  100% {
    transform: translate3d(68vw, 18vh, 30px);
  }
}
/* line 161, ../sass/layout/_grid.scss */
.particle2:nth-child(8) {
  animation: particle-animation-8 60s infinite;
  opacity: .34;
  height: 8px;
  width: 8px;
  animation-delay: -1.6s;
  transform: translate3d(46vw, 33vh, 75px);
  background: var(--primaryColor);
}
@keyframes particle-animation-9 {
  100% {
    transform: translate3d(31vw, 4vh, 10px);
  }
}
/* line 161, ../sass/layout/_grid.scss */
.particle2:nth-child(9) {
  animation: particle-animation-9 60s infinite;
  opacity: .21;
  height: 9px;
  width: 9px;
  animation-delay: -1.8s;
  transform: translate3d(62vw, 58vh, 17px);
  background: #8226d9;
}
@keyframes particle-animation-10 {
  100% {
    transform: translate3d(56vw, 40vh, 84px);
  }
}
/* line 161, ../sass/layout/_grid.scss */
.particle2:nth-child(10) {
  animation: particle-animation-10 60s infinite;
  opacity: .93;
  height: 8px;
  width: 8px;
  animation-delay: -2s;
  transform: translate3d(44vw, 21vh, 11px);
  background: var(--secondaryColor);
}
@keyframes particle-animation-11 {
  100% {
    transform: translate3d(9vw, 1vh, 77px);
  }
}

`;

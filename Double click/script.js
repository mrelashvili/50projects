'use strict';

const loveMe = document.querySelector('.loveMe');
const times = document.getElementById('times');

let clickTime = 0;

loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
    console.log(clickTime);
  } else {
    if((new Date().getTime() - clickTime) < 800) {
      createHart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

function createHart(e) {}
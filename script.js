"use strict";

const countArray = [0];
let i = 0;

document.addEventListener("DOMContentLoaded", init);

function init() {
  //   console.log("init");
  //   console.log(i);
  console.log("counting... ", countArray);
  if (i < 8) {
    i++;
    countArray.unshift(i);
    setTimeout(() => {
      init();
    }, 1000);
  } else if (i >= 8) {
    i++;
    countArray.unshift(i);
    countArray.pop();
    setTimeout(() => {
      init();
    }, 1000);
  } else {
    console.log("I'm done counting...");
  }
}

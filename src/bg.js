const body = document.querySelector("body");

const IMG_NUMBER = 6;

const IMG_SRCS = [
  "https://i.ibb.co/M280nPC/1.jpg",
  "https://i.ibb.co/b6WLCb0/2.jpg",
  "https://i.ibb.co/7vyJXWT/3.jpg",
  "https://i.ibb.co/xjbLkFY/4.jpg",
  "https://i.ibb.co/gjvCJDd/5.jpg",
  "https://i.ibb.co/kHTYBtC/6.jpg",
]

function paintImage(imgNumber) {
  const image = new Image();
  image.src = IMG_SRCS[imgNumber];
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
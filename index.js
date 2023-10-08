const textarea = document.querySelector(".text-area");
const char_element = document.querySelector(".char-number");
const word_element = document.querySelector(".word-number");
const x_element = document.querySelector(".x-number");
const insta_element = document.querySelector(".insta-number");

let x_char_limit = 280;
let insta_char_limit = 2200;

const colorChange = (count) => {
  if (count > 280) {
    x_element.classList.add("change-color");
  }
};

const charCounter = (e) => {
  char_element.innerText = e.target.value.length;
};

const wordCounter = (e) => {
  let str = e.target.value;
  str = str.split(" ");
  word_element.innerText = str.length;
  //   for (i = 0; i < str.length; i++) {
  //     if (str[i] === "") {
  //       word_element.innerHTML = str.length - 1;
  //     } else {
  //       word_element.innerHTML = str.length;
  //     }
  //   }
};

const twitterCounter = (e) => {
  x_element.innerText = x_char_limit - e.target.value.length;
  colorChange(e.target.value.length);
};

const instaCounter = (e) => {
  insta_element.innerText = insta_char_limit - e.target.value.length;
};

textarea.addEventListener("input", (e) => {
  charCounter(e);
  twitterCounter(e);
  instaCounter(e);
  wordCounter(e);
});

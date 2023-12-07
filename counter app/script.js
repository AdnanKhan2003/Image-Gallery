const btnIncrement = document.querySelector(".btn__increment");
const btnDecrement = document.querySelector(".btn__decrement");
const btnReset = document.querySelector(".btn__reset");

const counterNumber = document.querySelector(".counter__number");
let counter = 0;

const setColor = function (color) {
  if (counter < 0) {
    counterNumber.style.color = "red";
  }
  if (counter >= 1) {
    counterNumber.style.color = "green";
  }
  if (counter === 0) {
    counterNumber.style.color = "black";
  }
  if (color === "default") {
    counterNumber.style.color = "gray";
  }
};

const setBtnFunctionality = function (functionality) {
  if (functionality === "+") {
    counter++;
    counterNumber.textContent = counter;
    setColor();
  }
  if (functionality === "-") {
    counter--;
    counterNumber.textContent = counter;
    setColor();
  }
  if (functionality === "") {
    counter = 0;
    counterNumber.textContent = counter;
    setColor("default");
  }
};

const incrementNum = function (e) {
  e.preventDefault();
  setBtnFunctionality("+");
};

const decrementNum = function (e) {
  e.preventDefault();
  setBtnFunctionality("-");
};
const resetNum = function (e) {
  e.preventDefault();
  setBtnFunctionality("");
};

btnIncrement.addEventListener("click", incrementNum);
btnDecrement.addEventListener("click", decrementNum);
btnReset.addEventListener("click", resetNum);

const btnsCalculator = document.querySelector(".calculator__container");
const btnResult = document.querySelector(".display__result");

btnsCalculator.addEventListener("click", function (e) {
  e.preventDefault();

  //   const btn = e.target.querySelector(".calculator--btn");
  const btn = e.target.closest(".calculator--btn");
  if (!btn) return;
  btnResult.value += btn.value;

  if (btn.value === "AC") {
    btnResult.value = "";
  }
  if (btn.value === "DE") {
    btnResult.value = btnResult.value.toString().slice(0, -3);
  }

  if (btn.value === "=") {
    btnResult.value = btnResult.value.toString().slice(0, -1);
    btnResult.value = getCalculationRes(btnResult.value);
    // btnResult.value = "a";
  }
});

const getCalculationRes = function (value) {
  return eval(value);
};

console.log(btnsCalculator);

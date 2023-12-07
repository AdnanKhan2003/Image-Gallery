const handHour = document.querySelector(".hand-hour");
const handMinute = document.querySelector(".hand-minute");
const handSecond = document.querySelector(".hand-second");

const setClock = function () {
  const date = new Date();

  const secondRatio = date.getSeconds() / 60;
  const minuteRatio = (secondRatio + date.getMinutes()) / 60;
  const hourRatio = (minuteRatio + date.getHours()) / 12;

  setRotation(handSecond, secondRatio);
  setRotation(handMinute, minuteRatio);
  setRotation(handHour, hourRatio);
};

setInterval(setClock, 1000);

const setRotation = function (element, rotationRatio) {
  element.style.setProperty("--rotation-deg", rotationRatio * 360);
};

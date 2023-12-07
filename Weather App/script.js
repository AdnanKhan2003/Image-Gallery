const formSearch = document.querySelector(".weather__searchbar__container");
const inputSearch = document.querySelector(".weather__searchbar");
const weatherImg = document.querySelector(".weather__climate__icon img");
const weatherTemp = document.querySelector(".weather__temperature__number");
const cityName = document.querySelector(".weather__city");
const weatherHumidity = document.querySelector(
  ".weather__data__humidity__number"
);
const sectionHero = document.querySelector(".weather__hero");
const sectionFooter = document.querySelector(".weather__footer");
const windowError = document.querySelector(".weather__error");
const weatherWind = document.querySelector(".weather__data__wind__number");
const API_KEY = "9aa13a9d90e07e48c24c5e6e2ae67c04";
const btnError = document.querySelector(".error__button");
const btnSearch = document.querySelector(".weather__search__btn");
const searchbarError = document.querySelector(".text");
// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

const getSearchInput = function () {
  const input = inputSearch.value.replaceAll(" ", "").trim().toLowerCase();
  if (input === "") {
    searchbarError.classList.remove("hidden");
    console.log("gadha");
    inputSearch.placeholder = "";
    return;
  }
  inputSearch.value = "";
  return input;
};

const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      windowError.classList.remove("hidden");
      throw new Error("NO such city found");
    }
    return data;
  } catch (err) {
    console.log(err);
  }
};

const renderWeatherData = async function (e) {
  e.preventDefault();

  sectionHero.classList.remove("hidden");
  sectionFooter.classList.remove("hidden");

  const city = getSearchInput();

  const data = await getJSON(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
  console.log(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
  console.log(data);

  if (data.weather[0].main === "Clouds") {
    weatherImg.src = "./images/clouds.png";
  }
  if (data.weather[0].main === "Clear") {
    weatherImg.src = "./images/clear.png";
  }
  if (data.weather[0].main === "Drizzle") {
    weatherImg.src = "./images/drizzle.png";
  }
  if (data.weather[0].main === "Mist") {
    weatherImg.src = "./images/mist.png";
  }
  if (data.weather[0].main === "Rain") {
    weatherImg.src = "./images/rain.png";
  }
  if (data.weather[0].main === "Snow") {
    weatherImg.src = "./images/snow.png";
  }

  weatherTemp.innerText = "";
  cityName.innerText = "";
  weatherHumidity.innerText = "";
  weatherWind.innerText = "";

  weatherTemp.innerText = Math.round(data.main.temp);
  cityName.innerText = data.name;
  weatherHumidity.innerText = data.main.humidity;
  weatherWind.innerText = data.wind.deg;
};

formSearch.addEventListener("submit", renderWeatherData);
btnError.addEventListener("click", function () {
  windowError.classList.add("hidden");
  searchbarError.classList.add("hidden");
  inputSearch.placeholder = "Enter your city";
});
btnSearch.addEventListener("click", renderWeatherData);

const btnNext = document.querySelector(".btn__quote");

const getJSON = async function (url) {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

getJSON(`http://api.forismatic.com/api/1.0/`).then((data) => console.log(data));

import html from "./index.html";
import "./index.scss";
function loaderPage() {
  const apiKey ="412b2bbb994f0e9d6651f11c9143555d";
  const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

  const searchBox = document.querySelector(".header input");
  const searchBtn = document.querySelector(".header button");
  async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` + "°");
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = data.main.temp;
    //ocument.querySelector(".icon").innerHTML = data.weather[0].icon;
  }
  searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
  });

}

window.addEventListener("load", loaderPage);

export default html;

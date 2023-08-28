import {dom} from "./dom";

const apiKey = "886705b4c1182eb1c69f28eb8c520e20";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    dom(data);
    document.querySelector(".demo").innerHTML = "";
  } catch (err) {
    document.querySelector(".demo").innerHTML =
      "The entered city name is invalid";
  }
  
}

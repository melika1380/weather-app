import cloudy from "../icon/few-clouds.png";
import clear from "../icon/clear.png";
import rainy from "../icon/rainy.png";
import windy from "../icon/mist.png";
import snow from "../icon/snow.png";
import thunderstorm from "../icon/thunderstorm.png";

export function dom(data){
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML = data.main.temp + "°";
  document.querySelector(".maxTemp").innerHTML = data.main.temp_max + "°";
  document.querySelector(".minTemp").innerHTML = data.main.temp_min + "°";
  document.querySelector(".mainWeather").innerHTML = data.weather[0].main;
  document.querySelector(".description").innerHTML =
    data.weather[0].description;
  result(data);
}
function result(data) {
    const weatherIcon = document.querySelector(".icon-weather");
    switch (data.weather[0].main) {
      case "Clear":
        weatherIcon.src = clear;
        break;
      case "Clouds":
        weatherIcon.src = cloudy;
        break;
      case "Drizzle":
        weatherIcon.src = rainy;
        break;
      case "Mist":
      case "Smoke":
      case "Haze":
      case "Dust":
      case "Fog":
      case "Sand":
      case "Ash":
      case "Squall":
      case "Tornado":
        weatherIcon.src = windy;
        break;
      case "Snow":
        weatherIcon.src = snow;
        break;
      case "Thunderstorm":
        weatherIcon.src = thunderstorm;
        break;
      case "Rain":
        weatherIcon.src = rainy;
        break;
      default:
        weatherIcon.src=cloudy;
        break;
    }
  }
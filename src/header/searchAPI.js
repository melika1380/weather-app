import cloudy from "../icon/cloudy.png";
import clear from "../icon/clear.png";
import rainy from "../icon/rainy.png";
import windy from "../icon/windy.png";
import snow from "../icon/snow.png";

const apiKey = "886705b4c1182eb1c69f28eb8c520e20";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
try{
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = data.main.temp+"°";
    document.querySelector(".maxTemp").innerHTML = data.main.temp_max+"°";
    document.querySelector(".minTemp").innerHTML = data.main.temp_min+"°";
    document.querySelector(".mainWeather").innerHTML = data.weather[0].main;
    document.querySelector(".description").innerHTML =data.weather[0].description;
    result();
  }
    catch(err){
      document.querySelector(".demo").innerHTML ="The entered city name is invalid";
    }
    
    function result(){
      const weatherIcon = document.querySelector(".icon-weather");
      if (data.weather[0].main == "Clear") {
        weatherIcon.src = clear;
      } else if (data.weather[0].main == "Clouds") {
        weatherIcon.src = cloudy;
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = rainy;
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = windy;
      } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = snow;
      }
    }
  }


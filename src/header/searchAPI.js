const apiKey = "886705b4c1182eb1c69f28eb8c520e20";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export async function checkWeather(city) {
  
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML = data.main.temp;
  document.querySelector(".maxTemp").innerHTML = data.main.temp_max;
  document.querySelector(".minTemp").innerHTML = data.main.temp_min;
  document.querySelector(".mainWeather").innerHTML = data.weather[0].main;
  document.querySelector(".description").innerHTML =data.weather[0].description;

  const weatherIcon = document.querySelector(".icon-weather");
  
  function getIcon(){
    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "../icon/clear.png";
    }else if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "../icon/cloudy.png";
    }else if(data.weather[0].main == "Rain"){
      weatherIcon.src = "../icon/rainy.png";
    }else if(data.weather[0].main =="Drizzle"){
      weatherIcon.src = "../icon/snow.png";
    }else if(data.weather[0].main == "Mist"){
      weatherIcon.src = "../icon/windy.png";
    }
  }
  getIcon();
  console.log(data);
}

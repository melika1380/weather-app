const apiKey = "886705b4c1182eb1c69f28eb8c520e20";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` + "°");
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = data.main.temp;
  }
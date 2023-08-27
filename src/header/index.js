import html from "./index.html";
import "./index.scss";
import { checkWeather } from "./searchAPI";
function loaderPage() {
  const searchBox = document.querySelector(".input");
  const searchBtn = document.querySelector(".header button");

  const information = document.querySelector(".information");
  const defultCity = `
  <div class="city">AMESTRDAM</div>
  <ul>
    <li class="mainWeather bold">CLOUDS</li>
    <li class="description bold">FEW CLOUDS</li>
  </ul>
  <div class="icon"><img  class="icon-weather" src="../icon/cloudy.png"></div>
  <div class="temperature">45°</div>
    `;
  information.innerHTML = defultCity;

  const footer = document.querySelector(".footer");
  const footerDefult = `
  <ul class="minList">
    <li>min</li>
    <li class="minTemp">17.4°</li>
  </ul>
 <div class="vertical-line"></div>
 <ul class="maxList">
  <li>max</li>
  <li class="maxTemp">19.95°</li>
 </ul>`;
  footer.innerHTML = footerDefult;
  
  searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    searchBox.value = "";
  });

  const keyUp = (event) => {
    if (event.key === "Enter") {
      searchBtn.click();
    }
  };
  searchBox.addEventListener("keyup", keyUp);
}

window.addEventListener("load", loaderPage);

export default html;

import html from "./index.html";
import "./index.scss";
import { checkWeather } from "./searchAPI";

function loaderPage() {

  const searchBox = document.querySelector(".input");
  const searchBtn = document.querySelector(".header button");

  checkWeather("tehran");
  
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

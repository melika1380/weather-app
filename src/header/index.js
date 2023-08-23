import html from "./index.html";
import "./index.scss";
import { checkWeather } from "./searchAPI";

function loaderPage() {
  const searchBox = document.querySelector(".header input");
  const searchBtn = document.querySelector(".header button");

  searchBtn.addEventListener("click", () => {
    const originalColor = window.getComputedStyle(searchBtn).backgroundColor;
    searchBtn.style.backgroundColor = "rgba(255, 255, 255, 0.596)";
    searchBtn.style.padding = "12px 17px";
    setTimeout(() => {
      searchBtn.style.backgroundColor = originalColor;
      searchBtn.style.padding = "10px 15px";
    }, 200);
    checkWeather(searchBox.value);
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

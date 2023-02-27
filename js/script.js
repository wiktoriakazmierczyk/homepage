console.log("Cześć!");

let buttonElement = document.querySelector(".js-button");
let bodyElement = document.querySelector(".js-body");
let themeNameElement = document.querySelector(".js-themeName");

buttonElement.addEventListener("click", () => {
    bodyElement.classList.toggle("body--dark");

    themeNameElement.innerText = bodyElement.classList.contains("body--dark") ? "jasny" : "ciemny";
});
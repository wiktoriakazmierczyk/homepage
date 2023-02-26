console.log("Cześć!");

let buttonElement = document.querySelector(".js-button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

buttonElement.addEventListener("click", () => {
    body.classList.toggle("body__dark");
    themeName.innerText = body.classList.contains("body__dark") ? "jasny" : "ciemny";
});
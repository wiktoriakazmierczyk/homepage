{
    const welcome = () => {
        console.log("Cześć!");
    };

    const toggleBackground = () => {
        const bodyElement = document.querySelector(".js-body");
        const themeNameElement = document.querySelector(".js-themeName");

        bodyElement.classList.toggle("body--dark");
        themeNameElement.innerText = bodyElement.classList.contains("body--dark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const buttonElement = document.querySelector(".js-button");
        buttonElement.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}
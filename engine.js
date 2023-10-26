
let euroElement = document.querySelector(".js-euro");
let formElement = document.querySelector(".js-form");

let resultElement = document.querySelector(".js-result");
let button = document.querySelector(".js-button");
let button1 = document.querySelector(".js-button1")
let body = document.querySelector(".js-body");
let variable = document.querySelector(".js-variable");
let ratePLN = 4.46;



formElement.addEventListener("click", (event) => {
    event.preventDefault(event);


    let euro = euroElement.value;

    let result = ratePLN * euro;
    resultElement.innerHTML = result.toFixed(2);
});

button1.addEventListener("click", (event) => {

    event.preventDefault(event);
    body.classList.toggle("body--dark");
    variable.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
});


let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateGBP = 4.98;
let rateEUR = 4.35;
let rateDolar = 3.98;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let amount = +amountElement.value;
  let currency = currencyElement.value;

  let result;
  switch (currency) {
    case "GBP":
      result = amount / rateGBP;
      break;

    case "EUR":
      result = amount / rateEUR;
      break;

    case "Dolar":
      result = amount / rateDolar;
      break;
  }

  resultElement.innerHTML = `${amount.toFixed(
    2
  )} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
});
let calculatButton = document.querySelector(".js-button");
let elementButton = document.querySelector(".js-buttonDayNight");
let elementBody = document.querySelector(".js-body");
let elementDayNightVariable = document.querySelector(".js-dayNightVariable");

elementButton.addEventListener("click", () => {
  elementBody.classList.toggle("body--dark");
  elementDayNightVariable.innerText = elementBody.classList.contains(
    "body--dark"
  )
    ? "jasny"
    : "ciemny";
});

calculatButton.addEventListener("click", () => {
  resultElement.classList.toggle("result");
});

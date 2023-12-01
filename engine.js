const calculation = (currency, amount) => {
  const GBPValue = 5.04;
  const EuroValue = 4.35;
  const DolarValue = 3.98;

  switch (currency) {
    case "GBP":
      return amount / GBPValue;
    case "EUR":
      return amount / EuroValue;

    case "Dolar":
      return amount / DolarValue;
  }
};

const dayNightEffect = (event) => {
  event.preventDefault();
  const elementBody = document.querySelector(".js-body");
  const elementDayNightVariable = document.querySelector(
    ".js-dayNightVariable"
  );

  elementBody.classList.toggle("body--dark");
  elementDayNightVariable.innerText = elementBody.classList.contains(
    "body--dark"
  )
    ? "jasny"
    : "ciemny";
};

<<<<<<< HEAD
const resultUpdateText = (amount, result, currency) => {
  const resultElement = document.querySelector(".js-result");

  resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
  resultElement.classList.add("result");
}

const onFormSubmit = (event) => {
  event.preventDefault();
  const amountElement = document.querySelector(".js-amount");
  const currencyElement = document.querySelector(".js-currency");

  const currency = currencyElement.value;
  const amount = +amountElement.value;

  const result = calculation(currency, amount);

  resultUpdateText(amount, result, currency);
};

const init2 = () => {
  const formElement = document.querySelector(".js-form");

  formElement.addEventListener("submit", onFormSubmit);
};
const init = () => {
  const elementButton = document.querySelector(".js-buttonDayNight");

  elementButton.addEventListener("click", dayNightEffect);
};

init();
init2();
=======
calculatButton.addEventListener("click", () => {
  resultElement.classList.toggle("result");
});
>>>>>>> 69356d2a9a3f8bfb62417c9829a346a78a6459f7

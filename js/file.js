let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 0.21;
let rateUSD = 0.23;
let rateGBP = 0.19;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let result = amountElement.value;
    let currency = currencyElement.value;

    switch (currency) {
        case "EUR":
            result *= rateEUR;
            break;
        case "USD":
            result *= rateUSD;
            break;
        case "GBP":
            result *= rateGBP;
    }

    resultElement.innerHTML = `${amountElement.value} PLN = <strong>${result.toFixed(2)}</strong> ${currencyElement.value}`;
});

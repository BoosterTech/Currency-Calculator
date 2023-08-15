{
    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    }

    const calculateResult = (amount, currency) => {
        const rateEUR = 0.21;
        const rateUSD = 0.23;
        const rateGBP = 0.19;

        switch (currency) {
            case "EUR":
                return amount *= rateEUR;
            case "USD":
                return amount *= rateUSD;
            case "GBP":
                return amount *= rateGBP;
        }
    }

    const updateResult = () => {
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);
        resultElement.innerHTML = `${amount} PLN = <strong>${result.toFixed(2)}</strong> ${currency}`;
        amountElement.value = "";
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        updateResult();
    }

    init();
}
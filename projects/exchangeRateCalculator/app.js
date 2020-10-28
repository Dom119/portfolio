const currencyEL_one = document.getElementById("currency-one");
const amountEL_one = document.getElementById("amount-one");
const currencyEL_two = document.getElementById("currency-two");
const amountEL_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swapBtn = document.querySelector(".btn");

//function

calculate = function () {
  const currency_one = currencyEL_one.value;
  const currency_two = currencyEL_two.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/52fdfea367cbb3650e5d9a9a/latest/${currency_one}`
  )
    .then((res) => res.json())
    .then((data) => {
      rate = data.conversion_rates[`${currency_two}`];
      result = +amountEL_one.value * rate;
      result = result.toFixed(2);
      amountEL_two.value = `${result}`;
      swap.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      // const rate = data.convertion_rates(`${currency_two}`);
    });
};

//Event Listeners

currencyEL_one.addEventListener("change", calculate);
currencyEL_two.addEventListener("change", calculate);
amountEL_one.addEventListener("input", calculate);
amountEL_two.addEventListener("input", calculate);

swapBtn.addEventListener("click", () => {
  const temp = currencyEL_one.value;
  currencyEL_one.value = currencyEL_two.value;
  currencyEL_two.value = temp;
  const temp2 = amountEL_one.value;
  amountEL_one.value = amountEL_two.value;
  amountEL_two.value = temp2;
  calculate();
});

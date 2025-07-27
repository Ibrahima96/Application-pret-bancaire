const loanData = {
  amount: 1000,
  repayment: 42,
  rate: 7,
};

const allInputs = document.querySelectorAll(".loan-app__range-input");

allInputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});

const loanAmountLabel = document.querySelector(".js-loan-amount");
const repaymentLabel = document.querySelector(".js-repayment-duration");

function handleInputChange(e) {
  const inputValue = Number(e.target.value);
  if (e.target.id === "loan-amount") {
    loanAmountLabel.textContent = `${inputValue.toLocaleString()}€`;
    loanData.amount = inputValue;
  } else if (e.target.id === "repayment") {
    repaymentLabel.textContent = `${inputValue}`;
    loanData.repayment = inputValue;
  }

  displayLoanInformation();
}

const totalAmountTxt = document.querySelector(".js-total-value");
const repaymentTxt = document.querySelector(".js-monthly-payment");
const interestTxt = document.querySelector(".js-total-interest");
function displayLoanInformation() {
  const totalPayment = loanData.amount + loanData.amount * (loanData.rate / 100);
  const perMonthPayment = totalPayment / loanData.repayment;
  const totalInterest = totalPayment - loanData.amount;
 totalAmountTxt.textContent = `${Math.trunc(totalPayment).toLocaleString()}€`
 repaymentTxt.textContent = `${Math.trunc(perMonthPayment).toLocaleString()}€`
 interestTxt.textContent = `${Math.trunc(totalInterest).toLocaleString()}€`

}

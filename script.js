let billAmount = document.getElementById("bill-amount");
let percentTip = document.getElementById("percentage-tip");
let tipAmount = document.getElementById("tip-amount");
let totalAmo = document.getElementById("total+");
let totalDis = document.getElementById("total-");
let calculate = document.getElementById("calculate");
let reset = document.getElementById("reset");
let myForm = document.getElementById("tCalculator");

calculate.addEventListener("click", () => {
  billAmount = Number(billAmount.value);
  percentTip = Number(percentTip.value);

  event.preventDefault();
  calculateAmount();
});

reset.addEventListener("click", () => {
    resetAmount();
});

function calculateAmount() {
  if (isNaN(billAmount) || billAmount <= 0 || billAmount === null) {
    alert("Please enter a valid Bill Amount");
  } else if (isNaN(percentTip) || percentTip <= 0 || percentTip === null) {
    alert("Please enter a valid Tip percentage");
  } else {
    let calculatedTip = (percentTip / 100) * billAmount;
    tipAmount.value = "$" + calculatedTip;

    let calculatedTotal = billAmount + calculatedTip;
    totalAmo.value = "$" + calculatedTotal;

    let calculatedTotal2 = billAmount - calculatedTip;
    totalDis.value = "$" + calculatedTotal2;
  }
}

function resetAmount() {
    myForm.reset();
}

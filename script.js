let billAmount = document.getElementById("bill-amount");
let percentTip = document.getElementById("percentage-tip");
let tipAmount = document.getElementById("tip-amount");
let totalAmo = document.getElementById("total+");
let totalDis = document.getElementById("total-");
let calculate = document.getElementById("calculate");
let reset = document.getElementById("reset");

calculate.addEventListener("click", (e) => {
  e.preventDefault();
  calculateAmount();
});

reset.addEventListener("click", () => {
    resetAmount();
});


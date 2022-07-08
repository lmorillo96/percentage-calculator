import calculateAmount from "./js/functionCalc.js";
import resetAmount from "./js/functionRes.js"

let calculate = document.getElementById("calculate");
let reset = document.getElementById("reset");

calculate.addEventListener("click", (e) => {
  e.preventDefault();
  calculateAmount();
});

reset.addEventListener("click", () => {
    resetAmount();
});


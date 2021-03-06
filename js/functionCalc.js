export default function calculateAmount() {
  let tipAmount = document.getElementById("tip-amount");
  let totalAmo = document.getElementById("total+");
  let totalDis = document.getElementById("total-");
  let billAmount = document.getElementById("bill-amount");
  let percentTip = document.getElementById("percentage-tip");

  billAmount = Number(billAmount.value);
  percentTip = Number(percentTip.value);

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

let houseRate = 1.29;
let carRate = 1.99;
let consRate = 1.79;

document.querySelector(".calculate").addEventListener("click", (e) => {
  e.preventDefault();
  let typeCredi = document.querySelector("#credi").value;
  let term = Number(document.querySelector("#term").value);
  let amount = Number(document.querySelector("#amount").value);
  let resAmount = document.querySelector("#crediAmount");
  let resType = document.querySelector("#typeCredi");
  let resTerm = document.querySelector(".term");
  let resRate = document.querySelector(".rate");
  let resTotal = document.querySelector(".total");
  let resInstallment = document.querySelector(".installment");

  if (typeCredi == "Housing Loan") {
    resRate.innerText = houseRate;
  } else if (typeCredi == "Consumer Loan") {
    resRate.innerText = consRate;
  } else if (typeCredi == "Car Loan") {
    resRate.innerText = carRate;
  }
  resAmount.innerText = amount;
  resType.innerText = typeCredi;
  resTerm.innerText = term;

  let lastRate = resRate.innerText / 100;

  resInstallment.innerText = (
    (amount * (lastRate * (1 + lastRate) ** term)) /
    ((1 + lastRate) ** term - 1)
  ).toFixed(2);
  resTotal.innerText = (resInstallment.innerText * term).toFixed(2);

  document.querySelector("#div-res").classList.remove("result");
  if (!typeCredi || !term || !total) {
    alert("Please enter the necessary information");
    document.querySelector("#div-res").classList.add("result");
  }
});

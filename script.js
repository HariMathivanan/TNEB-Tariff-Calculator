function calculateBill() {
  let units = parseFloat(document.getElementById("units").value);
  let bill = 0;

  // Implement your tariff rates here (e.g., tiered pricing)

  if (units > 1000){
    bill = units*11.80;
  } else if (units > 800 && units <= 1000){
    bill = units*10.7;
  } else if (units > 600 && units <= 800){
    bill = units*9.65;
  } else if (units > 500 && units <= 600){
    bill = units*8.55;
  } else if (units > 400 && units <= 500){
    bill = units*6.45;
  } else if (units > 101 && units <= 400){
    bill = units*4.8;
  } else if (units <= 100) {
    bill = 0;
  }
  document.getElementById("result").textContent = "Your Bill: ₹" + bill;
}

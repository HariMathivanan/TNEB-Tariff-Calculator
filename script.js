function calculateBill() {
  let units = parseFloat(document.getElementById("units").value);
  let bill = 0;

  // Implement your tariff rates here (e.g., tiered pricing)

if ((units-100) > 1000){
    bill = (units-100)*11.80;
  } else if ((units-100) > 800 && (units-100) <= 1000){
    bill = (units-100)*10.7;
  } else if ((units-100) > 600 && (units-100) <= 800){
    bill = (units-100)*9.65;
  } else if ((units-100) > 500 && (units-100) <= 600){
    bill = (units-100)*8.55;
  } else if ((units-100) > 400 && (units-100) <= 500){
    bill = (units-100)*6.45;
  } else if ((units-100) > 100 && (units-100) <= 400){
    bill = (units-100)*4.8;
  } else if ((units-100) >= 1) {
    bill = (units-100)*4.8;
  }
  document.getElementById("result").textContent = "Your Bill: ₹" + bill;
}


function calculateBill() {
  let units = parseFloat(document.getElementById("units").value);
  let bill = 0;

  if (isNaN(units) || units < 0) {
    document.getElementById("result").textContent =
      "Enter valid units";
    return;
  }

  if (units <= 500) {
    // First 200 units free
    if (units > 200)
      bill += Math.min(units - 200, 200) * 4.70;

    if (units > 400)
      bill += (units - 400) * 6.30;

  } else {
    // Only first 100 units free
    bill += 100 * 4.70;

    if (units > 400)
      bill += Math.min(units - 400, 100) * 6.30;

    if (units > 500)
      bill += Math.min(units - 500, 100) * 8.40;

    if (units > 600)
      bill += Math.min(units - 600, 200) * 9.45;

    if (units > 800)
      bill += Math.min(units - 800, 200) * 10.50;

    if (units > 1000)
      bill += (units - 1000) * 11.55;
  }

  document.getElementById("result").textContent =
    "Your Bill: ₹" + bill.toFixed(2);
}


function calculateAmount() {
    let bill = parseFloat(document.getElementById("amount").value);
    let units = 0;

    if (isNaN(bill) || bill < 0) {
        document.getElementById("result").textContent =
            "Enter a valid bill amount";
        return;
    }

    if (bill === 0) {
        units = 200;
    }
    else if (bill <= 940) {
        units = 200 + bill / 4.70;
    }
    else if (bill <= 1570) {
        units = 400 + (bill - 940) / 6.30;
    }
    else if (bill <= 2410) {
        units = 500 + (bill - 1570) / 8.40;
    }
    else if (bill <= 4300) {
        units = 600 + (bill - 2410) / 9.45;
    }
    else if (bill <= 6400) {
        units = 800 + (bill - 4300) / 10.50;
    }
    else {
        units = 1000 + (bill - 6400) / 11.55;
    }

    document.getElementById("result").textContent =
        "Consumed Units: " + units.toFixed(2) + " units";
}

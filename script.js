const display = document.getElementById("display");

// Append symbols to the display
function appendSymbol(symbol) {
  display.value += symbol;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
  try {
    display.value = eval(display.value) || "";
  } catch {
    display.value = "Error";
  }
}

// Unit conversion function
function convertUnits() {
  const value = parseFloat(display.value);
  const unit = document.getElementById("unit-convert").value;

  if (isNaN(value)) {
    display.value = "Error";
    return;
  }

  switch (unit) {
    // Length conversions
    case "m-to-ft":
      display.value = (value * 3.28084).toFixed(2); // Meters to Feet
      break;
    case "ft-to-m":
      display.value = (value / 3.28084).toFixed(2); // Feet to Meters
      break;
    case "cm-to-in":
      display.value = (value * 0.393701).toFixed(2); // Centimeters to Inches
      break;
    case "in-to-cm":
      display.value = (value / 0.393701).toFixed(2); // Inches to Centimeters
      break;

    // Mass conversions
    case "kg-to-lbs":
      display.value = (value * 2.20462).toFixed(2); // Kilograms to Pounds
      break;
    case "lbs-to-kg":
      display.value = (value / 2.20462).toFixed(2); // Pounds to Kilograms
      break;

    // Temperature conversions
    case "c-to-f":
      display.value = ((value * 9/5) + 32).toFixed(2); // Celsius to Fahrenheit
      break;
    case "f-to-c":
      display.value = ((value - 32) * 5/9).toFixed(2); // Fahrenheit to Celsius
      break;

    // Volume conversions
    case "l-to-gal":
      display.value = (value * 0.264172).toFixed(2); // Liters to Gallons
      break;
    case "gal-to-l":
      display.value = (value / 0.264172).toFixed(2); // Gallons to Liters
      break;

    // Data conversions
    case "mb-to-gb":
      display.value = (value / 1024).toFixed(2); // MB to GB
      break;
    case "gb-to-mb":
      display.value = (value * 1024).toFixed(2); // GB to MB
      break;

    // Time conversions
    case "min-to-sec":
      display.value = (value * 60).toFixed(2); // Minutes to Seconds
      break;
    case "hr-to-min":
      display.value = (value * 60).toFixed(2); // Hours to Minutes
      break;

    default:
      display.value = "Error";
      break;
  }

  document.getElementById("unit-convert").selectedIndex = 0; // Reset selection
}

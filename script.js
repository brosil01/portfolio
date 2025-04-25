
let result = document.getElementById("result");
let history = document.getElementById("history");
let current = "";

function inputValue(val) {
  if (val === "+/-") {
    current = eval(current) * -1 + "";
  } else if (val === "%") {
    current = eval(current) / 100 + "";
  } else {
    current += val;
  }
  result.textContent = current;
}

function clearDisplay() {
  current = "";
  result.textContent = "0";
  history.textContent = "";
}

function calculate() {
  try {
    history.textContent = current;
    current = eval(current).toString();
    result.textContent = current;
  } catch (e) {
    result.textContent = "Error";
  }
}

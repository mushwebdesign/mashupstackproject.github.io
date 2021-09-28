function calc() {
  const opertor = document.getElementById("operator").value;
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  const result = document.getElementById("result");
  if (opertor === "+") {
    result.value = num1 + num2;
  }
  if (opertor === "-") {
    result.value = num1 - num2;
  }
  if (opertor === "/") {
    result.value = num1 / num2;
  }
  if (opertor === "*") {
    result.value = num1 * num2;
  }
  console.log(num1, num2, opertor);
}

const rest = document.getElementsByClassName("reset")[0];
function reset() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").value = "";
  console.log("hi");
}

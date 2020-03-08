
document.addEventListener("DOMContentLoaded", function () {

  const inputs = document.querySelectorAll("input"); // Array

  const buttonElement = document.querySelector("#addButton");
  buttonElement.onclick = function () {
    let result = 0;

    for (let a of inputs) {
      result = result + Number(a.value);
    }

    document.querySelector("#result").innerHTML = result;
  }
});

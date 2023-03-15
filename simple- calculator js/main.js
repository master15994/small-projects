function plus() {
  let n1, n2, result;

  let num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);
  let num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);

  result = num1 + num2;
  document.getElementById('out').innerHTML = result;
}

function minus() {
  let n1, n2, result;

  let num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);
  let num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);

  result = num1 - num2;
  document.getElementById('out').innerHTML = result;
}

function milti() {
  let n1, n2, result;

  let num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);
  let num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);

  result = num1 * num2;
  document.getElementById('out').innerHTML = result;
}

function divide() {
  let n1, n2, result;

  let num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);
  let num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);

  result = num1 / num2;
  document.getElementById('out').innerHTML = result;
}

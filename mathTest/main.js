let button = document.getElementById('finish');

button.addEventListener('click', checkTest);

function checkTest() {
  let result = '0';

  let a1 = document.getElementById('q1').value;
  if (a1 === '2') {
    result++;
  }

  let a2 = document.getElementById('q2').value;
  if (a2 == 'Бразилия') {
    result++;
  }

  let a3 = document.getElementById('q3').value;
  if (a3 == 'Молча') {
    result++;
  }

  let a4 = document.getElementById('q4').value;
  if (a4 == 'Бесконечность') {
    result++;
  }

  alert('Кол-во правильных ответов :' + result);
}

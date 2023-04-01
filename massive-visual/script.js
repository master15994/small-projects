const animals = ['crab', 'dog', 'frog'];

function showArr(arr, elem) {
  let out = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined) {
      out += `<div><img src="images\\${arr[i]}.png" alt="${arr[i]}"><span>${i}</span></div>`;
    }
  }
  document.querySelector(elem).innerHTML = out;
  document.querySelector('.out-1-source-length').innerHTML =
    'Длина массива ' + animals.length;
  document.querySelector('.out-1-source').innerHTML =
    'const animals = [' + animals + ']';
}
showArr(animals, '.out-1-source-image');
function addToArray() {
  let index = +document.querySelector('.array-index').value;
  if (index > 50) {
    alert('Слишком длинный .....');
  } else if (index < 0) {
    alert('Надо чтобы было больше 0');
  }
  animals[index] = document.querySelector('.array-element').value;
  showArr(animals, '.out-1-source-image');
}

document.querySelector('.add-to-array').onclick = addToArray;

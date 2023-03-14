const lights = {
  red: 'red',
  yellow: 'yellow',
  green: 'green',
};

const classesByLight = {
  [lights.red]: 'traffic-light_red',
  [lights.yellow]: 'traffic-light_yellow',
  [lights.green]: 'traffic-light_green',
};

const nextLightByLight = {
  [lights.red]: lights.green,
  [lights.green]: lights.yellow,
  [lights.yellow]: lights.red,
};

let currentLight = lights.red;

function switchLight(node) {
  const currentClass = classesByLight[currentLight];
  const nextClass = classesByLight[nextLightByLight[currentLight]];
  const nextLight = nextLightByLight[currentLight];
  currentLight = nextLight;
  console.log(currentLight);

  node.classList.replace(currentClass, nextClass);
}

function initLight(node) {
  node.classList.add(classesByLight[currentLight]);
}

let btnNode = document.querySelector('.btn');
let trafficLightNode = document.querySelector('.js-traffic-light');

initLight(trafficLightNode);

btnNode.addEventListener('click', function () {
  switchLight(trafficLightNode);
});

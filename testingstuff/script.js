const mole = document.getElementById('mole');

let score = 0;

mole.addEventListener('click', points);

function points() {
  score++;
  console.log('points have been added');
}

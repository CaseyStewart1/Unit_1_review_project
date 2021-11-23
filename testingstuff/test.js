///////////////////////////////////////////////////////////
/////////////////////// this works ////////////////////////
const mole = document.getElementById('mole');
const startB = document.getElementById('start');
let score = 0;

startB.addEventListener('click', start);
mole.addEventListener('click', () => {
  points(), hit();
});

function points() {
  score++;
  scoreBoard.textContent = score;
}

function start() {
  const time = randoTimer(500, 7000);
  scoreBoard.textContent = 0;
  score = false;
  opening();
}
///////////////////////
function opening() {
  mole.style.visibility = 'hidden';
}
function hit() {
  mole.style.visibility = 'hidden';
  setTimeout('pop()', 2000);
}
function pop() {
  mole.style.visibility = 'visible';
}
/////////////////////
function randoTimer(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/////////
console.log(randoTimer(1000, 7000));
//////////

function magic() {
  const time = randoTimer(1000, 6000);
}
///////////////////////////////////////////////////////////

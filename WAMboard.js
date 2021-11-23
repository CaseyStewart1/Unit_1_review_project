const mole = document.querySelectorAll('.mole');
const startB = document.getElementById('start');
const shotClock = document.getElementById('shotClock');
let score = 0;
let dots = 0;
let timeLeft = 20;
let timerID = setInterval(countdown, 1000);
startB.addEventListener('click', start);

function points() {
  score++;
  scoreBoard.textContent = score;
}

function start() {
  scoreBoard.textContent = 0;
  score = false;
  GlennsGreat();
  //new timer count down
  //when zero stopFunction
}

function hit(i) {
  mole[i].style.visibility = 'hidden';
  setTimeout(() => pop(i), 2000);
  console.log('nailed it');
  //call GG
}

function pop(i) {
  mole[i].style.visibility = 'visible';
}
function GlennsGreat() {
  ///choosing time
  let crazyTime = randoTimer(1000, 4000);
  //choosing mole
  let randoMole = Math.floor(Math.random() * mole.length);
  console.log(randoMole, mole[randoMole]);

  //when time is 0 a random mole turns on
  setInterval(() => {
    pop(randoMole);
  }, crazyTime);
  //repeat
}
repetition = setInterval(() => {
  GlennsGreat();
}, 1000);
///////////////////////////////////////////////////////
function randoTimer(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/////// EL for all moles/////////
for (let i = 0; i < mole.length; i++) {
  mole[i].addEventListener('click', () => {
    points(i), hit(i);
  });
}
///////////////// shotclock ///////////
function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerID);
    clearInterval(repetition);
    mole[i].style.visibility = 'hidden';
  } else {
    shotClock.innerHTML = timeLeft + 's';
    timeLeft--;
  }
}

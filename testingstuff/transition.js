const mole = document.querySelectorAll('.mole');
const startB = document.getElementById('start');
let score = 0;
let dots = 0;
startB.addEventListener('click', start);

function points() {
  score++;
  scoreBoard.textContent = score;
}

function start() {
  scoreBoard.textContent = 0;
  score = false;
  GlennsGreat();
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
setInterval(() => {
  GlennsGreat();
  dots++;
  if (dots === 15) {
    clearInterval(GlennsGreat);
  }
}, 700);
///////////////////////////////////////////////////////
function randoTimer(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(randoTimer(1000, 7000));

// document.querySelectorAll('.mole').forEach((mole) => {
//   mole.addEventListener('click', () => {
//     points(), hit();
//   });
// });
for (let i = 0; i < mole.length; i++) {
  mole[i].addEventListener('click', () => {
    points(i), hit(i);
  });
}
//

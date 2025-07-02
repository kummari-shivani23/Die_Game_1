'use strict';

//const { act } = require('react');

//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// //rolling dice functionality
// let scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;

let scores,currentScore,activePlayer,playing;
const init =function(){

//rolling dice functionality
     scores = [0, 0];
     currentScore = 0;
     activePlayer = 0;
     playing = true;
    current0El.textContent=0;
    current1El.textContent=0;
    score0El.textContent=0;
    score1El.textContent=0;
    player0El.classList.remove('player-winner');
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
    diceEl.classList.add('hidden');
}

init();

const switchplayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.gene random roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3.check for roll die is 1 then switch player

    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchplayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
        diceEl.classList.add('hidden');
    } else {
      switchplayer();
    }
  }
});

btnNew.addEventListener('click',function(){
    init();
})

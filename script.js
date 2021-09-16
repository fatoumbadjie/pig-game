'use strict';

// selecting elements
const player0El=document.querySelector('.player--0');
const player1El =document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');



const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// starting conditions
const initial = function(){
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent= 0;
    current1El.textContent = 0;
    current0El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
initial();

const switchPlayer = function(){
    //currentScore += dice;
document.getElementById(`current--${activePlayer}`).textContent = 0;
currentScore = 0
activePlayer = activePlayer ===0? 1 : 0;
player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active');
};

//rolling dice functionallity
btnRoll.addEventListener('click', function(){
  if(playing){
    //1. generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
 //2. display dice
 diceEl.classList.remove('hidden');
 diceEl.src = `dice-${dice}.png`;

 //3. check for roll dice 1 if true switch to next player 
 if(dice !==1){
     //add score to curent score
     currentScore += dice; 
document.getElementById(`current--${activePlayer}`).textContent = currentScore;
 }else{
//switch to next player
switchPlayer();
}
  }
});

btnHold.addEventListener('click', function(){
    if(playing){
    //1.add score to active player's score
    scores[activePlayer] += currentScore;
    //score[1] = score[1] + currentScore
     document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //2.check if player's score>=50
    if(scores[activePlayer]>=100){
        //finish game
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.classList.remove('player--active');
    }else {
    //switch player
    switchPlayer();
    }
    }
});

btnNew.addEventListener('click', initial);

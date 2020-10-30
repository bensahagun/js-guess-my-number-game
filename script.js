'use strict';

const startingScore = 20;
let secretNumber = Math.trunc(Math.random() * startingScore) + 1;
let score = startingScore;
let highScore = 0;

document.querySelector('.score').textContent = startingScore;

//button clicked
document.querySelector('.check').addEventListener('click', function () {
  const result = validateGuess(document.querySelector('.guess').value);

  switch (result) {
    case 0:
      changeMessage('🎉 Correct Number!');
      document.querySelector('body').style.backgroundColor = '#317c1b';
      document.querySelector('.number').textContent = secretNumber;
      highScore = score > highScore ? score : highScore;
      document.querySelector('.highscore').textContent = highScore;
      break;
    case -1:
      changeMessage('☝ Too high!');
      score--;
      console.log(score);
      changeScore();
      break;
    case 1:
      changeMessage('👇 Too low!');
      score--;
      console.log(score);
      changeScore();
      break;
  }
});

const validateGuess = function (guessNumber) {
  const difference = secretNumber - Number(guessNumber);

  if (difference == 0) {
    return 0;
  } else if (difference > 0) {
    return 1;
  } else if (difference < 0) {
    return -1;
  }
};

const changeMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeScore = function () {
  document.querySelector('.score').textContent = score;
};

const resetGame = function () {
  secretNumber = Math.trunc(Math.random() * startingScore) + 1;
  score = startingScore;

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = startingScore;
  document.querySelector('.guess').value = '';
};

document.querySelector('.again').addEventListener('click', resetGame);

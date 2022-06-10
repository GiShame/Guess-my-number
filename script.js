'use strict';

// // document.querySelector('.message').textContent = 'Correct Number!';
// // document.querySelector('.number').textContent = 13;
// // document.querySelector('.score').textContent = 19;
// // // document.querySelector('.guess').value = 15


const secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)

    if (!guess) {
        document.querySelector('.message').textContent = 'STUPID!'
        score --;
        document.querySelector('.score').textContent = score;
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Right number!'
        score --;
        document.querySelector('.score').textContent = score;
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too high'
        score --;
        document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
        if (score < 1) {
        document.querySelector('.message').textContent = 'Too low'
        score --;
        document.querySelector('.score').textContent = score;
        }
    } 
})
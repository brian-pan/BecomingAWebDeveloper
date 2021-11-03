const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');

const p1DisPlay = document.querySelector('#p1Display'); //span
const p2DisPlay = document.querySelector('#p2Display');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score ++;
        if (p1Score === winningScore) {
            isGameOver = true;
        }
        p1DisPlay.textContent = p1Score;
    }
})
p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score ++;
        if (p2Score === winningScore) {
            isGameOver = true;
        }
        p2DisPlay.textContent = p2Score;
    }
})

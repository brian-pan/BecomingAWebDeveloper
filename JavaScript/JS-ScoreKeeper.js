const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');

const p1DisPlay = document.querySelector('#p1Display'); //span
const p2DisPlay = document.querySelector('#p2Display');
const roundsSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

roundsSelect.addEventListener('change', function () {
    winningScore = parseInt(roundsSelect.value);
    reset();
})
p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score ++;
        if (p1Score === Math.ceil(winningScore/2)) {
            isGameOver = true;
            p1DisPlay.classList.add('winner');
            p2DisPlay.classList.add('loser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1DisPlay.textContent = p1Score;
    }
})
p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score ++;
        if (p2Score === Math.ceil(winningScore/2)) {
            isGameOver = true;
            p2DisPlay.classList.add('winner');
            p1DisPlay.classList.add('loser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2DisPlay.textContent = p2Score;
    }
})
resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1DisPlay.textContent = p1Score;
    p2DisPlay.textContent = p2Score;
    p1DisPlay.classList.remove('winner', 'loser');
    p2DisPlay.classList.remove('winner', 'loser');
    p1Button.disabled = false;
    p2Button.disabled = false;
}
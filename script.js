const countdownEl = document.getElementById('countdown');
const timeUp = document.getElementById('timeup-container');
const tryAgain = document.getElementById('tryagain');
const tryAgainFailed = document.getElementById('tryagain-failed');

const congratulations = document.getElementById('congratulations-container');
const failed = document.getElementById('failed-container');
const submit = document.getElementById('submitBtn');

const startingMinutes = 5;
let time = startingMinutes * 60;

let timeInterval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time < 0) {
        timeUp.style = 'display: flex';
        countdownEl.textContent = '0:00';
    }
}, 1000);

tryAgain.addEventListener('click', () => {
    location.reload()
});

tryAgainFailed.addEventListener('click', () => {
    location.reload()
});

submit.addEventListener('click', () => {
    const firstInput = document.querySelector('input[name="answer1"]:checked').value;
    const secondInput = document.querySelector('input[name="answer2"]:checked').value;
    const thirdInput = document.querySelector('input[name="answer3"]:checked').value;
    const fourthInput = document.querySelector('input[name="answer4"]:checked').value;
    
    if (firstInput === 'Overtaking prohibited for trucks' && 
        secondInput === 'Begin of a priority road' && 
        thirdInput === 'Begin of a minimum speed' && 
        fourthInput === 'Warning for tractors') {
            congratulations.style = 'display: flex';
            clearInterval(timeInterval);
        } else {
            failed.style = 'display: flex';
            clearInterval(timeInterval);
        }
});
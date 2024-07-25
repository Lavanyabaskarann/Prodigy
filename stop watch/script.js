let timer;
let isRunning = false;
let elapsedSeconds = 0;

const startStopButton = document.getElementById('start-stop');
const resetButton = document.getElementById('reset');
const timeDisplay = document.getElementById('time-display');

startStopButton.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    elapsedSeconds = 0;
    updateTime();
    startStopButton.textContent = 'Start';
});

function updateTime() {
    elapsedSeconds++;
    const hours = String(Math.floor(elapsedSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((elapsedSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(elapsedSeconds % 60).padStart(2, '0');
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

let timerInterval;
let timerRunning = false;
let timerSeconds = 0;

const timerDisplay = document.getElementById("timer-display");
const startTimerBtn = document.getElementById("start-timer");
const stopTimerBtn = document.getElementById("stop-timer");
const resetTimerBtn = document.getElementById("reset-timer");

function updateTimerDisplay() {
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;
    timerDisplay.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
    if (!timerRunning) {
        timerInterval = setInterval(() => {
            timerSeconds++;
            updateTimerDisplay();
        }, 1000);
        timerRunning = true;
    }
}

function stopTimer() {
    if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
    }
}

function resetTimer() {
    stopTimer();
    timerSeconds = 0;
    updateTimerDisplay();
}

startTimerBtn.addEventListener("click", startTimer);
stopTimerBtn.addEventListener("click", stopTimer);
resetTimerBtn.addEventListener("click", resetTimer);

// Stopwatch
let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchSeconds = 0;

const stopwatchDisplay = document.getElementById("stopwatch-display");
const startStopwatchBtn = document.getElementById("start-stopwatch");
const stopStopwatchBtn = document.getElementById("stop-stopwatch");
const resetStopwatchBtn = document.getElementById("reset-stopwatch");

function updateStopwatchDisplay() {
    const hours = Math.floor(stopwatchSeconds / 3600);
    const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
    const seconds = stopwatchSeconds % 60;
    stopwatchDisplay.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchInterval = setInterval(() => {
            stopwatchSeconds++;
            updateStopwatchDisplay();
        }, 1000);
        stopwatchRunning = true;
    }
}

function stopStopwatch() {
    if (stopwatchRunning) {
        clearInterval(stopwatchInterval);
        stopwatchRunning = false;
    }
}

function resetStopwatch() {
    stopStopwatch();
    stopwatchSeconds = 0;
    updateStopwatchDisplay();
}

startStopwatchBtn.addEventListener("click", startStopwatch);
stopStopwatchBtn.addEventListener("click", stopStopwatch);
resetStopwatchBtn.addEventListener("click", resetStopwatch);
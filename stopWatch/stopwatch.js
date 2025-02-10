let isRunning = false;
let startTime;
let elapsedTime = 0;
let timerInterval;

function updateTime() {
    const currentTime = new Date().getTime();
    elapsedTime = currentTime - startTime;
    
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const milliseconds = Math.floor((elapsedTime % 1000));
    
    document.getElementById("display").innerHTML = 
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds + ":" +
        (milliseconds < 100 ? (milliseconds < 10 ? "00" : "0") : "") + milliseconds;
}

document.getElementById("startStop").addEventListener("click", function() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        this.innerHTML = "Start";
    } else {
        startTime = new Date().getTime() - elapsedTime;
        timerInterval = setInterval(updateTime, 10);
        isRunning = true;
        this.innerHTML = "Stop";
    }
});

document.getElementById("reset").addEventListener("click", function() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    document.getElementById("display").innerHTML = "00:00:00:000";
    document.getElementById("startStop").innerHTML = "Start";
    document.getElementById("laps").innerHTML = "";
});

document.getElementById("lap").addEventListener("click", function() {
    if (isRunning) {
        const lapTime = document.createElement("div");
        lapTime.className = "lap";
        lapTime.innerHTML = document.getElementById("display").innerHTML;
        document.getElementById("laps").appendChild(lapTime);
    }
});

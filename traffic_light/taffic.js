let stopButton1 = document.getElementById("stopButton");
let readyButton1 = document.getElementById("readyButton");
let goButton1 = document.getElementById("goButton");

let stopLight1 = document.getElementById("stopLight");
let readyLight1 = document.getElementById("readyLight");
let goLighth1 = document.getElementById("goLighth");


function turnOnRed(){
    stopButton1.style.backgroundColor="#cf1124";
    readyButton1.style.backgroundColor="#1f1d41";
    goButton1.style.backgroundColor="#1f1d41";


    stopLight1.style.backgroundColor="#cf1124";
    readyLight1.style.backgroundColor="#4b5069";
    goLighth1.style.backgroundColor="#4b5069";
}
/* jshint esversion: 6 */


let startBtn=document.getElementById("startbtn");
let stopBtn=document.getElementById("stopbtn");
let resetBtn=document.getElementById("resetbtn");
let textArea=document.getElementById("main");
let timerDisplay=document.getElementById("timer");
let wordCountDisplay=document.getElementById("wordCount");
let wpmDisplay=document.getElementById("wpm");

let interval;
let millisec=0;
let sec=0;
let min=0;
let startTime, isRunning = false;

//Start Time
function startTimeFunc() {
    if (!isRunning) {
        isRunning=true;
        textArea.disabled=false;
        textArea.focus();
        startTime=new Date();
        interval=setInterval(updateTime, 10);
    }
}

//Stop Time
function stopTimeFunc() {
    clearInterval(interval);
    isRunning=false;
}

//Reset Time
function resetTimeFunc() {
    clearInterval(interval);
    millisec=0; 
    sec=0; 
    min=0;
    timerDisplay.innerText ="00:00:00";
    wordCountDisplay.innerText="0";
    wpmDisplay.innerText="0";
    textArea.value="";
    textArea.disabled=true;
    isRunning=false;
}

//Update Time
function updateTime() {
    millisec +=10;
    if (millisec >= 1000) {
        sec++;
        millisec=0;
    }
    if (sec>= 60) {
        min++;
        sec=0;
    }
    
    timerDisplay.innerText = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}:${millisec}`;
}

//Update Words Per Minute
textArea.addEventListener("input", function () {
    let words=textArea.value.trim().split(/\s+/).length;
    let elapsedTime=(new Date() - startTime) / 60000; // in minutes
    let wpm=Math.round(words / elapsedTime) || 0;
    
    wordCountDisplay.innerText=words;
    wpmDisplay.innerText=wpm;
});

// //Set Text
// function setText(value) {
//     let texts =[
//         "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.",
//         "The quick brown fox jumps over the lazy dog.",
//         "Typing speed is an important skill for programmers and writers.",
//         "Practice daily to improve your typing accuracy and speed."
//     ];
    
//     textArea.value=texts[value - 1];
//     textArea.disabled=false;
//     textArea.focus();
// }

// Attach Event Listeners
startBtn.addEventListener("click", startTimeFunc);
stopBtn.addEventListener("click", stopTimeFunc);
resetBtn.addEventListener("click", resetTimeFunc);

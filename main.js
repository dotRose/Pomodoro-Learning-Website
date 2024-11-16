let button = document.getElementById("main");
let timer = document.getElementById("timer");
let textState = document.getElementById("state");

let stage = 0;
let paused = false;
let currentState = 0;

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;

  let formatedMins = minutes.toString().padStart(2, "0");
  let formatedSecs = remainingSeconds.toString().padStart(2, "0");
  return `${formatedMins}:${formatedSecs}`;
}

function finishedCountown() {
  console.log(currentState);
  if (currentState == 1) {
    currentState = 0;
    countdown(300);
    textState.innerHTML = "Break Time";
  } else if (currentState == 0) {
    currentState = 1;
    countdown(1500);
    textState.innerHTML = "Learn Time";
  }
}

function countdown(i) {
  if (i == undefined) {
    i = 1;
  }
  if (i > 0) {
    if (paused == false) {
      i--;
    }
    timer.innerHTML = formatTime(i);
    var timeout = window.setTimeout("countdown(" + i + ")", 1000);
    if (i == 0) {
      finishedCountown();
    }
  }
}

button.onclick = function () {
  if (stage == 0) {
    stage = 1;
    paused = false;
    button.innerHTML = "Pause";
    currentState = 0;
    finishedCountown();
  } else if (stage == 1) {
    paused = true;
    button.innerHTML = "Resume";
    stage = 0.5;
  } else if (stage == 0.5) {
    stage = 1;
    this.innerHTML = "Pause";
    paused = false;
  }
};

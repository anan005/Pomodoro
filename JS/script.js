let startButtonElm = document.querySelector(".start-button");
let unitElm = document.querySelector(".unit");
let timeElm = document.querySelector(".time");

let minutes = 25;
let seconds = 0;

startButtonElm.addEventListener("click", startCountdown);

function startCountdown() {
  // Hide UI
  startButtonElm.classList.add("hidden");
  unitElm.classList.add("hidden");

  // Show duration
  showTime();

  // Star countdown interval
  function countDown() {
    seconds -= 1;

    if (seconds < 0) {
      seconds = 59;
      minutes -= 1;
    }

    showTime();

    if (minutes < 0) {
      window.clearInterval(intervalId);
      resetPomodoro();
    }
  }

  let intervalId = window.setInterval(countDown, 1000);
}

function showTime() {
  // Convert seconds to padded string
  let sec = seconds;

  if (sec < 10) {
    sec = "0" + seconds;
  }

  timeElm.textContent = minutes + ":" + sec;
}

function resetPomodoro() {
  // Reset timer
  minutes = 25;
  seconds = 0;

  // Show UI
  startButtonElm.classList.remove("hidden");
  unitElm.classList.remove("hidden");

  timeElm.textContent = "25";
}

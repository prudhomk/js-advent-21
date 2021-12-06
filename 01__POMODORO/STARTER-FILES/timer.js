const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start-button');
const settingsButton = document.getElementById('settingsButton');

function startTimer(duration) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      
      minutesDisplay.textContent = minutes;
      secondsDisplay.TextContent = seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}


startButton.addEventListener('click', () => {
  startTimer(15);
});

var hoursLabel = document.getElementById("hours");
var minutesLabel = document.getElementById("minutes");

var hours = 0;
var minutes = 0;
var time;

function startClock() {
  setTimeout(function () {
    if (minutes <= 8) {
      minutes++;
      minutesLabel.innerHTML = "0" + minutes;
      startClock();
    } else if (minutes >= 9 && minutes < 59) {
      minutes++;
      minutesLabel.innerHTML = minutes; // prints *up to* 59
      startClock();
    } else if (minutes == 59 && hours <= 8) {
      minutes = 0;
      minutesLabel.innerHTML = "0" + minutes;
      hours++;
      hoursLabel.innerHTML = "0" + hours;
      startClock();
    } else if (minutes == 59 && hours >= 9 && hours <= 22) {
      minutes = 0;
      minutesLabel.innerHTML = "0" + minutes;
      hours++;
      hoursLabel.innerHTML = hours;
      startClock();
    } else {
      minutes = 0;
      minutesLabel.innerHTML = "0" + minutes;
      hours = 0;
      hoursLabel.innerHTML = "0" + hours;
      startClock();
    }
  }, 5);
}

startClock();

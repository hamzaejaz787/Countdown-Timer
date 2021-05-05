const countDownDate = new Date("Jun 30, 2021 00:00:00").getTime();
const showDays = document.querySelector(".days");
const showHours = document.querySelector(".hours");
const showMinutes = document.querySelector(".minutes");
const showSeconds = document.querySelector(".seconds");

setInterval(updateCountdown, 1000);
function updateCountdown() {
  const currentTime = new Date().getTime();
  const timeDiff = countDownDate - currentTime;

  let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  showDays.innerHTML = days;
  showHours.innerHTML = hours;
  showMinutes.innerHTML = minutes;
  showSeconds.innerHTML = seconds;
}

const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = seconds * 6;

  const mins = now.getMinutes();
  const minsDegrees = mins * 6;

  const hour = now.getHours();
  const hourDegrees = (hour % 12) * 30 + mins * 0.5;

  // Cypress expects translate + rotate (Matrix becomes correct)
  secondHand.style.transform = `translateX(0px) rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `translateX(0px) rotate(${minsDegrees}deg)`;
  hourHand.style.transform = `translateX(0px) rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();

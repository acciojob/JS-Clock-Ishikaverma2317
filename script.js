function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Calculate rotation angles
  const secondDeg = seconds * 6; // 360° / 60s
  const minuteDeg = minutes * 6 + seconds * 0.1; // minute hand moves slightly each second
  const hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30; // hour hand smooth movement

  // Apply rotation
  document.querySelector(".second-hand").style.transform = `rotate(${secondDeg}deg)`;
  document.querySelector(".minute-hand").style.transform = `rotate(${minuteDeg}deg)`;
  document.querySelector(".hour-hand").style.transform = `rotate(${hourDeg}deg)`;
}

// Update every second
setInterval(updateClock, 1000);
updateClock(); // initial call

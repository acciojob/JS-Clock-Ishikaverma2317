function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Convert to rotation angles
    const secondsDeg = (seconds / 60) * 360;
    const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30;

    // Rotate the hands
    document.getElementById("second").style.transform = `rotate(${secondsDeg}deg)`;
    document.getElementById("minute").style.transform = `rotate(${minutesDeg}deg)`;
    document.getElementById("hour").style.transform = `rotate(${hoursDeg}deg)`;
}

// Run clock every second
setInterval(updateClock, 1000);
updateClock(); // initial call

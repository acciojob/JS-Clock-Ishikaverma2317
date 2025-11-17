function setClock() {
    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');

    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours   = now.getHours();

    // 6 degrees per second/minute
    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6 + seconds * 0.1; 
    const hourDeg   = (hours % 12) * 30 + minutes * 0.5;

    secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    hourHand.style.transform   = `translateX(-50%) rotate(${hourDeg}deg)`;
}

// Update clock every second
setInterval(setClock, 1000);

// Run once on load
setClock();

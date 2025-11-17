function setClock() {
    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');

    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours   = now.getHours();

    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const hourDeg   = (hours % 12) * 30 + minutes * 0.5;

    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform   = `rotate(${hourDeg}deg)`;
}

setInterval(setClock, 1000);
setClock();

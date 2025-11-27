function setClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();

    const secondsDegree = (seconds * 6) + 90;
    const minsDegree = (mins * 6) + 90;
    const hourDegree = ((hour % 12) * 30) + (mins * 0.5) + 90;

    document.querySelector('.second-hand').style.transform = `rotate(${secondsDegree}deg)`;
    document.querySelector('.min-hand').style.transform = `rotate(${minsDegree}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setClock, 1000);
setClock();

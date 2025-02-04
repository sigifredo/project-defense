import './scss/style.scss';

const DAY = 86400000;
const HOUR = 3600000;
const MINUTE = 60000;
const SECOND = 1000;

addEventListener('DOMContentLoaded', () => {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    const weeks = document.getElementById('weeks');

    setInterval(() => {
        const targetTime = new Date('2025-05-05T23:59:00.000-05:00');
        const now = new Date();

        let distance = targetTime.getTime() - now.getTime();

        const d = distance / DAY;
        days.innerText = Math.floor(d);
        hours.innerText = Math.floor((distance % DAY) / HOUR);
        minutes.innerText = Math.floor((distance % HOUR) / MINUTE);
        weeks.innerText = Math.floor(d / 7);
        seconds.innerText = Math.floor((distance % MINUTE) / SECOND);

    }, 1000);
});
function updateClock() {
    const now = new Date();
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };

    dateElement.textContent = now.toLocaleDateString('en-US', dateOptions);
    timeElement.textContent = now.toLocaleTimeString('en-US', timeOptions);
}


setInterval(updateClock, 1000);


updateClock();

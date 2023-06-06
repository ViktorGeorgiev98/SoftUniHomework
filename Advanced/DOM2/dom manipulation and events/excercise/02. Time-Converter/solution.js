// function attachEventsListeners() {
//     // get elements
//     const days = document.getElementById('days').value;
//     const hours = document.getElementById('hours').value;
//     const minutes = document.getElementById('minutes').value;
//     const seconds = document.getElementById('seconds').value;

//     const daysButton = document.getElementById('daysBtn');
//     const hoursButton = document.getElementById('hoursBtn');
//     const minutesbutton = document.getElementById('minutesBtn');
//     const secondsButton = document.getElementById('secondsBtn');

//     daysButton.addEventListener('click', calcHours);
//     hoursButton.addEventListener('click', calcMinutes);
//     minutesbutton.addEventListener('click', calcSeconds);

//     function calcHours(e) {
//         hours.value = days * 24;
//         minutes.value = days * 1440;
//         seconds.value = days * 86400;
//     }
//     function calcMinutes(e) {
//         minutes.value = days * 1440;
//         seconds.value = days * 86400;
//     }
//     function calcSeconds(e) {
//         seconds.value = days * 86400;
//     }
// }


function attachEventsListeners() {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    document.getElementById("daysBtn").addEventListener("click", onConvertClick);
    document.getElementById("hoursBtn").addEventListener("click", onConvertClick);
    document.getElementById("minutesBtn").addEventListener("click", onConvertClick);
    document.getElementById("secondsBtn").addEventListener("click", onConvertClick);

    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function convert(value, unit) {
        let days = value / ratios[unit];
        return {
            days: days,
            hours: days * ratios.hours,
            minutes: days * ratios.minutes,
            seconds: days * ratios.seconds
        }
    }

    function onConvertClick(ev) {
        const input = ev.target.parentElement.querySelector('input[type="text"]');
        const time = convert(Number(input.value), input.id);
        daysElement.value = time.days;
        hoursElement.value = time.hours;
        minutesElement.value = time.minutes;
        secondsElement.value = time.seconds;
    }
}
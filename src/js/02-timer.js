import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.querySelector("input#datetime-picker"),
    button: document.querySelector("button[data-start]"),
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]")
};

let selectedDate = null;
let intervalID = null;
let deltaTime = null;

refs.button.addEventListener("click", onBtnClick);

function onBtnClick(event) {
    event.preventDefault();

intervalID = setInterval(() => {
        const currentTime = Date.now();
        deltaTime = selectedDate - currentTime;
        if (deltaTime < 0) {
            clearInterval(intervalID);
            return;
    }
    updateTextContent(deltaTime);
    }, 1000);
};

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if(selectedDates[0] < Date.now()) {
        window.alert('Please choose a date in the future');
        } else {
            selectedDate = selectedDates[0];
            refs.button.removeAttribute("disabled");
        } 
    },
};

flatpickr(refs.input, options);

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
return String(value).padStart(2, '0');
}

function updateTextContent(delta) {
    refs.days.textContent = addLeadingZero(convertMs(delta).days);
    refs.hours.textContent = addLeadingZero(convertMs(delta).hours);
    refs.minutes.textContent = addLeadingZero(convertMs(delta).minutes);
    refs.seconds.textContent = addLeadingZero(convertMs(delta).seconds);
};

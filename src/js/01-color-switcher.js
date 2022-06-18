const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
console.log(startBtn);
console.log(stopBtn);

startBtn.addEventListener("click", onStartBtnClick);
stopBtn.addEventListener("click", onStopBtnClick);


const switcher = {
    intervalID: null,
    isActive: false, 
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.intervalID = setInterval(() => {
            const getRandom = getRandomHexColor();
            const body = document.querySelector("body");
            body.style.backgroundColor = getRandom;
        }, 1000);
    },
    stop() {
        clearInterval(this.intervalID);
        this.isActive = false;
    }
}

function onStartBtnClick() {
    switcher.start();
};
function onStopBtnClick() {
    switcher.stop();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

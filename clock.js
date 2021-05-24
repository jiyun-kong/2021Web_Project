const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    if(seconds<10) {
        if(hours<10) {
            if(minutes<10) {
                clockTitle.innerText = `0${hours}:0${minutes}:0${seconds}`;
            }
            else {
                clockTitle.innerText = `0${hours}:${minutes}:0${seconds}`;
            }
        }
        else {
            if(minutes<10) {
                clockTitle.innerText = `${hours}:0${minutes}:0${seconds}`;
            }
            else {
                clockTitle.innerText = `${hours}:${minutes}:0${seconds}`;
            }
        }
    }
    else {
        if(hours<10) {
            if(minutes<10) {
                clockTitle.innerText = `0${hours}:0${minutes}:${seconds}`;
            }
            else {
                clockTitle.innerText = `0${hours}:${minutes}:${seconds}`;
            }
        }
        else {
            if(minutes<10) {
                clockTitle.innerText = `${hours}:0${minutes}:${seconds}`;
            }
            else {
                clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
            }
        }
    } 
}
function timeChange() {
    setInterval(getTime, 1000);
}
function init() {
    timeChange();
}

init();

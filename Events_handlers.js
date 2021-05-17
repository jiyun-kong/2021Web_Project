const title = document.querySelector("#pick");

function handleResize() {
    console.log("I have been resized!")
}
window.addEventListener("resize", handleResize);

// handleResize()       : 바로 함수 호출
// handleResize         : 내가 원할 때 함수 호출 가능

function handleClick() {
    if(title.style.color == "blue") {
        title.style.color = "white";
    }
    else {
        title.style.color = "blue";
    }
}
title.addEventListener("click", handleClick);


function ifOnline() {
    console.log("You are ON line");
}
window.addEventListener("online", ifOnline);

function ifOffline() {
    console.log("You are OFF line");
}
window.addEventListener("offline", ifOffline);



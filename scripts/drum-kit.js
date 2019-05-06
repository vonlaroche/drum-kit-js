let aSpan = document.querySelector(".aSpan");
let sSpan = document.querySelector(".sSpan");
let dSpan = document.querySelector(".dSpan");
let fSpan = document.querySelector(".fSpan");
let gSpan = document.querySelector(".gSpan");
let hSpan = document.querySelector(".hSpan");
let jSpan = document.querySelector(".jSpan");
let kSpan = document.querySelector(".kSpan");
let lSpan = document.querySelector(".lSpan");


window.addEventListener("keydown", event => {
    if (event.keyCode === 65) {
        let clap = new Audio("./sounds/clap.wav");
        aSpan.classList.add("pressed");
        clap.play();
    }
    else if (event.keyCode === 83) {
        let hihat = new Audio("./sounds/hihat.wav");
        sSpan.classList.add("pressed");
        hihat.play();
    }
    else if (event.keyCode === 68) {
        let kick = new Audio("./sounds/kick.wav");
        dSpan.classList.add("pressed");
        kick.play();
    }
    else if (event.keyCode === 70) {
        let openhat = new Audio("./sounds/openhat.wav");
        fSpan.classList.add("pressed");
        openhat.play();
    }
    else if (event.keyCode === 71) {
        let boom = new Audio("./sounds/boom.wav");
        gSpan.classList.add("pressed");
        boom.play();
    }
    else if (event.keyCode === 72) {
        let ride = new Audio("./sounds/ride.wav");
        hSpan.classList.add("pressed");
        ride.play();
    }
    else if (event.keyCode === 74) {
        let snare = new Audio("./sounds/snare.wav");
        jSpan.classList.add("pressed");
        snare.play();
    }
    else if (event.keyCode === 75) {
        let tom = new Audio("./sounds/tom.wav");
        kSpan.classList.add("pressed");
        tom.play();
    }
    else if (event.keyCode === 76) {
        let tink = new Audio("./sounds/tink.wav");
        lSpan.classList.add("pressed");
        tink.play();
    }

})

let spans = document.querySelectorAll("span");

removeTransition = event => {
    if (event.propertyName !== "transform") {
        return;
    }
    event.target.classList.remove("pressed");
}

spans.forEach(span => span.addEventListener("transitionend", removeTransition));



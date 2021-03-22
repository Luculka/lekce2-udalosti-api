// tady je místo pro náš program


//bold po najetí myši na odstavec
function mouseover(udalost) {
    udalost.target.style.fontWeight = "bold";
}

let odstavec = document.querySelector(".odstavec");

//červený text v odstavci po kliknutí na tlačítko
function cerveny() {
    odstavec.classList.toggle("cerveny");
}

//zvětšení písma
function biggerText() {
    let element = document.querySelector(".odstavec");
    let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);

    element.style.fontSize = (currentSize + 1) + 'px';
}


// prehraj
// @param {string} elementSelector;

function prehraj(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.play();
}

function zastav(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
}

function vypnoutZvuk(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0.0;
}

function hlasitost1(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0.5;
}

function nejvyssiHlasitost(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 1;
}

function naZacatek(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.currentTime = 0.0;
}
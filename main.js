const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");
let allkeys = [],
audio = new Audio("tunes/a.wav");

const playTune = (key) => {
    audio.src = (`tunes/${key}.wav`);
    audio.play();
    const keyClick = document.querySelector(`[data-key="${key}"]`);
    keyClick.classList.add("active");
    setTimeout(() => {
        keyClick.classList.remove("active");
    }, 150)
}

pianoKeys.forEach(key => {
    allkeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
    if(allkeys.includes(e.key)) playTune(e.key);
}

volumeSlider.addEventListener("input", handleVolume);
keysCheckbox.addEventListener("click", showHideKeys);
document.addEventListener("keydown", pressedKey);
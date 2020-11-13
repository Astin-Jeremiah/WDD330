function playsound(play) {
    const audio = document.querySelector(`audio[data-key="${play.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${play.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    movebox(key);
}

function removeTransition(event) {
    this.classList.remove('playing');
};

function movebox(key) {
    let num1 = key.dataset.num;
    const num = parseInt(num1);
    let number = num * 10;
    if (number === 100){
        key.style.transform = `translateY(0px)`;
        key.setAttribute("data-num", "1");
    }else {
    let value = num +1;
    key.style.transform = `translateY(${number}px)`;
    key.setAttribute("data-num", value);
    }
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', (removeTransition)));

window.addEventListener('keydown', playsound);

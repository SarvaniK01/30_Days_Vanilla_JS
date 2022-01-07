const playSound = (event) => {
    // console.log(e.keyCode);

    const audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`)
    const key = document.querySelector(`div[data-key = "${event.keyCode}"]`)
    if(!audio) {
        return; 
    }
    // console.log(audio);
    // console.log(key);

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const removeTransition = (event) =>{
    // console.log(event);
    if (event.propertyName !== 'transform'){
        return;
    }
    // console.log(event.propertyName);
    // console.log(this);
    // this.classList.remove('playing');

    event.target.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
// console.log(key);

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound)





const secondHand = document.querySelector(".seconds-hand");

const minHand = document.querySelector(".minutes-hand");

const hourHand = document.querySelector(".hours-hand");

const setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    console.log(seconds);

    const secondsDegrees = ((seconds/60)* 360) + 90;
    // console.log(secondsDegrees);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minsDegrees = ((minutes/60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    

    const hours = now.getHours();
    const hourDegrees = ((hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate,1000);

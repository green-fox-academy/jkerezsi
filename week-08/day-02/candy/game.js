let createCandy = document.querySelector('.create-candies')
let buyLollypops = document.querySelector('.buy-lollypops')
let speed = document.querySelector('.speed')
let candyMachine = document.querySelector('.candy-machine')
let candies = document.querySelector('.candies')
let lollipop = document.querySelector('.lollypops')


let lollipopCounter = 0;
let counter = 5000;
let speedMeter = 0;

createCandy.addEventListener('click', ()=>{
 createCandies(1)
});   
buyLollypops.addEventListener('click', lolli)
candyMachine.addEventListener('click', makeItRain)



function createCandies(x) {
    counter += x;
    candies.innerHTML = counter;

};

function lolli() {
    if (counter > 100 && lollipopCounter >= 10) {
        lollipopCounter++
        speedMeter = Math.round(Math.floor(lollipopCounter /10))
        lollipop.innerHTML += "🍭";
        counter -= 100
        console.log(speedMeter)
        setInterval(() => {
            createCandies(speedMeter)
        }, 1000);
        speed.innerHTML = speedMeter
    }else if (counter >100 && lollipopCounter < 10) {
        lollipopCounter++
        lollipop.innerHTML += "🍭";
        counter -= 100;
        speed.innerHTML = speedMeter
    }
};

function makeItRain() {
    speedMeter *=10
    speed.innerHTML = speedMeter;
}






console.log('js:loaded')

/*----- constants -----*/


/*----- state variables -----*/
let boredom;
let hunger;
let slepiness;

let age;
let cycles;

let timer;
let interval;

/*----- cached elements  -----*/

const boredomStatEl = docoment.querySelector('#boredom-stat')
const hungerStatEl = docoment.querySelector('#hunger-stat')
const sleppyStatEl = docoment.querySelector('#slepiness-stat')

const gameBtnEls = document.querySelectorAll('#controller button')

/*----- event listeners -----*/


/*----- functions -----*/

Init()

function init(){
    state = 

    age= 0;
    cycles = 0;

    interval = 5000;
    timer = setInterval(runGame, interval);
   
    console.log("game has started")
    
    render()
}

function runGame(){
    console.log("game is running")
}
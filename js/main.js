console.log('js:loaded')

/*----- constants -----*/


/*----- state variables -----*/

let boredom; //integer
let hunger; // integer
let sleepiness; // integer

let age;
let cycles;

let timer; //setInterval id
let interval; //count of cycles

/*----- cached elements  -----*/


const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepyStatEl = document.querySelector('#sleepiness-stat')

// TODO: add cashe for game message string once added to game

const gameBtnEls = document.querySelector('#controller button')


/*----- event listeners -----*/


/*----- functions -----*/

init() // starts game when JS loads

function init(){

    age = 0;
    cycles = 0;

    timer = setInterval(runGame, interval);
    interval = 5000; //count of cycles
console.log('Game has STARTED!')
render();
}


function runGame(){
    console.log("Game is running")
}

function render(){
    console.log('rendering game')
}
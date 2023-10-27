

/*----- constants -----*/


/*----- state variables -----*/
let bordem; // int
let hunger; // int
let sleepiness; // int

let age; 
let cycles;

let timer; // setInterval ID
let interval; //ms passed for each cycle


/*----- cached elements  -----*/
const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepyStatEl = document.querySelector('#sleepiness-stat')

//TODO: add cache for game message string once added to game
const gameBtnEl = document.querySelectorAll('#controller button')


//TODO: add cache to restart after game over

/*----- event listeners -----*/


/*----- functions -----*/
init() //starts game when JS loads





function init() {

    age = 0
    cycles = 0
    
    interval = 5000 //ms passed on each cycle
    timer = setInterval(runGame, interval) //setInterval ID

    render()
}

function runGame() {
    // console.log('Game is running!')
}

function render() {

}
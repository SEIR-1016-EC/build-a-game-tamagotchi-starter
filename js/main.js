console.log('js:loaded')

/*----- constants -----*/
// constants that will not change


/*----- state variables -----*/
// state is the data that will change wile the game is running
let boredom;
let hunger;
let sleepiness;

let state;
//ice box features
let age;
let cycles;

let timer; //store set interval id
let interval; //count of the cycles


/*----- cached elements  -----*/
//cache the DOM
const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepyStatEl = document.querySelector('#sleepiness-stat')

const gameBtnEl = document.querySelectorAll('#controller button')

const INIT_STATE = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
}
/*----- event listeners -----*/


/*----- functions -----*/
init() //stats the game

function init() {

    state = {...INIT_STATE}
    age = 0
    cycles = 0
    interval = 5000 //in ms time passing for each cycle
    timer = setInterval(runGame, interval)

    render()
    console.log("Game started")
}


function runGame() {
    console.log("game is running")
}
function render() {
    console.log("render game")
}
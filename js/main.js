console.log('js:loaded')

/*----- constants -----*/
// constants that will not change


/*----- state variables -----*/
// state is the data that will change wile the game is running
let boredom;
let hunger;
let sleepiness;

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
/*----- event listeners -----*/


/*----- functions -----*/
init() //stats the game

function init() {
    console.log("Game started")
}

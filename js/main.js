console.log('js:loaded')

/*----- constants -----*/
// initial data states
//animation names
//image assets paths
const INIT_STATE = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
}
/*----- state variables -----*/
// state is the data that will change while the game is running
/*let boredom; // integer
let hunger; // integer
let sleepiness; // integer */

//HFM later on -> icebox features (age cycle for tama)
let state;

let age;
let cycles;

let timer; // setInterval id
let interval; // count of cycles

/*----- cached elements  -----*/
const boredomStatEl = document.querySelector("#boredom-stat")
const hungerStatEl = document.querySelector("#hunger-stat")
const sleepyStatEl = document.querySelector("#sleepiness-stat")

// TODO: add cache for game message string once added to game

const gamebtnEls = document.querySelector("#controller button")

// TODO: add cache for restart button after game over


/*----- event listeners -----*/


/*----- functions -----*/

init() // starts game when JS loads

function init(){
    age = 0;
    cycles = 0;
    interval = 5000;
    timer = setInterval(runGame, interval);

    
    
    
    console.log("game has started")
}

function runGame(){
    console.log("game is running")
}

function render(){
    console.log('rendering game')
}
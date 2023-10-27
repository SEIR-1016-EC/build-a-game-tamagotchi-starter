/*----- constants -----*/
const INIT_STATE = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
}

/*----- state variables (things which will change) -----*/

let state;

let boredom; //int
let hunger; // int
let sleepiness // int


// HFM aging cycle
let age;
let cycles;

let timer; // setInterval id
let interval; // count of cycles

/*----- cached elements  -----*/

const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepyStatEl = document.querySelector('#sleepiness-stat')

// TODO: add cache for game message string once added

const gameBtnEls = document.querySelectorAll('#controller button')



/*----- event listeners -----*/


/*----- functions -----*/

init() //starts game

function init(){
    
    state = {...INIT_STATE} // takes copy of INIT_STATE and makes a copy, 'refreshes'

    age = 0
    cycles = 0
    interval = 5000
    timer = setInterval(runGame, interval)

    console.log('game has started')

    // DOM updates
    render()
}

function runGame(){
    console.log('Game is running')
}

function render(){
    console.log('rendering game')
}

console.log('js:loaded')
/*----- constants -----*/
const INIT_STATE = {
    boredem: 0,
    hunger:0,
    sleepiness: 0
}

/*----- state variables -----*/
let boredom
let hunger
let sleepiness

let age
let cycles

let timer
let interval

let state
/*----- cached elements  -----*/
const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepyStatEl = document.querySelector('#sleepiness-stat')

const gameBtnEls = document.querySelector('#controller button')
/*----- event listeners -----*/


/*----- functions -----*/
init() //starts game when JS loads

function init() {

    state = {...INIT_STATE}

    age = 0
    cycles = 0
    
    interval = 5000
    timer = setInterval(runGame, interval)
    
    console.log("game has started")

    render()
}

function runGame() {
    console.log("game is running")
}

function render() {
    console.log("rendering")
}
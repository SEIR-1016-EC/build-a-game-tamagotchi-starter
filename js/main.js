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
    updateStats()
    render()
}
function render() {
    console.log("render game")
    renderstats()
}
function renderstats() {
    boredomStatEl.textContent = state.boredom
    hungerStatEl.textContent = state.hunger
    sleepyStatEl.textContent = state.sleepiness

    //icebox xonsider iterator for the dymanice reder of content
}

function updateStat(stat, value) {
    console.log("Stats updated")
}

function updateStats() {
    for (key in state) {
        //console.log(key)
        let randomAmount = Math.floor(Math.random() * 3)
        let currentValue  = state[key]
        state[key] = currentValue + randomAmount
        console.log(key, state[key], randomAmount)
    }
}


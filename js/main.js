console.log('js:loaded')

/*----- constants -----*/
// constants that will not change
const INIT_STATE = {
    boredom: 7,
    hunger: 7,
    sleepiness: 7
}

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

const gameBtnEls = document.querySelectorAll('#controller button')


/*----- event listeners -----*/
gameBtnEls.forEach(function(btn) {
    btn.addEventListener("click", handleBtnClick)
});
//ice box after a click remove the listener and then add it back 2 seconds later to throttle the user
function handleBtnClick(event) {
 const convertProp = {
    feed: 'hunger',
    sleep: 'sleepiness',
    play: 'boredom',
 }
 const key = convertProp[event.target.innerText]
 console.log(key)
 updateStat(key, -3)

 render()
}

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

//***** MAIN GAME FUNCTION STREAM ******//
function runGame() {
    if (continueGame()) {
        updateStats() 
    } else {
        gameOver()
    }

    render()
}


function render() {
    //console.log("render game")
    renderstats()
}
function renderstats() {
    boredomStatEl.textContent = state.boredom
    hungerStatEl.textContent = state.hunger
    sleepyStatEl.textContent = state.sleepiness

    //icebox xonsider iterator for the dymanice reder of content
}
//helper function
function updateStat(stat, value) {
    if (state[stat] + value >= 0) {
    state[stat] += value
    } else {
        state[stat] = 0
    }
}

function updateStats() {
    for (key in state) {
        //console.log(key)
        // let randomAmount = Math.floor(Math.random() * 3)
        // let currentValue  = state[key]
        // state[key] = currentValue + randomAmount
        // console.log(key, state[key], randomAmount)
        updateStat(key, Math.floor(Math.random() * 3))
    }
}
//evaluate the game state and/or end the game by checking all features/properties of state.  if any properties are less than 10
function continueGame() {
    let currentStats = []
    let keepRunning = true
    for (let key in state) {
        currentStats.push(state[key])
    }
    for (let stat of currentStats) {
        if (stat >10) {
            keepRunning = false
        }
    }
    return keepRunning  // return true or false 
}

function gameOver() {
    console.log('Game over!')
    //stop the interval calling runGame when the gameOver funciton is called
    clearInterval(timer)

}
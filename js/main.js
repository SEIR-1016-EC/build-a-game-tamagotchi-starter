

/*----- constants -----*/
const INIT_STATE = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
}

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
gameBtnEl.forEach(function(btn){
    btn.addEventListener('click', handleBtnClick)
})

function handleBtnClick(event) {
    console.log(event.target.innerText)

    const convertProp = {
        feed: 'hunger',
        sleep: 'sleepiness',
        play: 'boredom',
    }

    const key = convertProp[event.target.innerText]
    console.log(key)
}

/*----- functions -----*/
init() //starts game when JS loads





function init() {

    state = {...INIT_STATE}

    age = 0
    cycles = 0
    
    interval = 5000 //ms passed on each cycle
    timer = setInterval(runGame, interval) //setInterval ID

    render()
}

function runGame() {
    // console.log('Game is running!')
    render()
    if (continueGame()) {
        updateStats()  
    }
    else {
        gameOver()
    }
}

function render() {
    // any features which might update the DOM (the ui) -> will be called by render
    renderStats()
}

function renderStats() {
    boredomStatEl.textContent = state.boredom
    hungerStatEl.textContent = state.hunger
    sleepyStatEl.textContent = state.sleepiness
}

function updateStats() {
    // TODO: calll iterator over state and for each state property update the corresponding key

    for (key in state) {

        statUpdater(key, Math.floor(Math.random() * 3))
    }
}

function statUpdater(stat, value) {
    // Including error bounding, not let user take a stat below zero
    if (state[stat] + value >= 0) {
        state[stat] += value
    }
    else {
        state[stat] = 0
    }
}

function continueGame() {
    //Check all properties of state
    // If any of the properties are more than 10, call game over


    // const testGame = Object.values(state). every((stat) => stat < 10)
    // return testGame

    let currentStats = []
    let keepRunning = true

    for (let key in state) {
        currentStats.push(state[key])
    }
    // console.log(currentStats)

    for (let key of currentStats) {
        if (key > 9) {
            keepRunning = false
        }
    }
    return keepRunning
}

function gameOver() {
    console.log("GAME OVER")
    clearInterval(timer)
}


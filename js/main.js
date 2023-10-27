console.log('js:loaded')
/*----- constants -----*/
const INIT_STATE = {
    boredem: 0,
    hunger:0,
    sleepiness: 0
}

/*----- state variables -----*/
let age
let cycles

let timer
let interval

let state
/*----- cached elements  -----*/
const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepyStatEl = document.querySelector('#sleepiness-stat')

const gameBtnEls = document.querySelectorAll('#controller button')
/*----- event listeners -----*/
gameBtnEls.forEach(function(btn){
    btn.addEventListener('click', handleBtnClick)
})

function handleBtnClick(event) {
    console.log(event.target.innerText)

    const convertProp = {
        feed: 'hunger',
        sleep: 'sleepiness',
        play: 'boredom'
    }

    const key = convertProp[event.target.innerText]
    console.log(key)

    updateStat(key, -3)
    render()
}
/*----- functions -----*/
init() //starts game when JS loads

function init() {

    state = {...INIT_STATE}

    age = 0
    cycles = 0
    
    interval = 5000
    timer = setInterval(runGame, interval)
    
    // console.log("game has started")

    render()
}

function runGame() {
    // console.log("game is running")
    updateStats()
    render()
}

function render() {
    // console.log("rendering")
    renderStats()
}

function renderStats() {
    boredomStatEl.textContent =  state.boredem
    hungerStatEl.textContent = state.hunger
    sleepyStatEl.textContent = state.sleepiness

    // console.log("stats rendered")
}
function updateStats() {
    //csll iterator over state

    for(key in state) {
        // let randomAmount = Math.floor(Math.random()*3)
        // let currentValue = state[key]
        // state[key] = currentValue + randomAmount
        // console.log(key, state[key], randomAmount)
        updateStat(key, Math.floor(Math.random()*3))
    }
}

function updateStat(stat, value) {

    if(state[stat] + value >=0){
        state[stat] += value
    } else {
        state[stat] = 0
    }
}

// function continueGame() {
//     let continue  = true
//     let currentStats = []

//     for(let key in state) {
//         currentStats.push(state[key])
//     }

//     for(let stat of currentStats) {
//         if(stats >= 10) {
//             endGame()
//         }
//     }
// }

// function endGame() {
//         console.log("game ended")
// }
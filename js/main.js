console.log('js:loaded')

/*----- constants -----*/
// initial data states
// animation names
// image assets paths

const INIT_STATE = {
    boredom : 0,
    hunger : 0,
    sleepiness: 0
}

/*----- state variables -----*/
// state is the data that will change while game is running

let boredom; // integer
let hunger;
let sleepiness;
// HFM features
let age;
let cycles;

let timer;
let interval;




/*----- cached elements  -----*/
const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepyStatEl = document.querySelector('#sleepiness-stat')

// add cache for game message string once added to game

const gameBtnEls = document.querySelectorAll('#controller button')


/*----- event listeners -----*/
gameBtnEls.forEach(function (btn){
    btn.addEventListener('click', handleBtnClick)
})
function handleBtnClick(event){

    const convertProp = {
        feed: 'hunger',
        sleep: 'sleepiness',
        play: 'boredom'
    }
    const key = convertProp[event.target.innerText]
    
    updateStat(key, -3)
    render();
}

/*----- functions -----*/
init()

function init(){

    state = {...INIT_STATE};
    game = 0;
    cycles = 0;

    interval = 5000
    timer = setInterval(runGame, interval);
    
    render()

}

function runGame(){
    if(continueGame()) {
        updateStats()
    }   else {
        gameOver()
    }
    
    render()

}

function render() {
    // any featutes which update the dom (UI), wll be called by render
    renderStats()
}

function renderStats() {
    boredomStatEl.textContent = state.boredom
    hungerStatEl.textContent = state.hunger
    sleepyStatEl.textContent = state.sleepiness
}

function updateStats(){

    for (key in state) {
        let rdmInt = Math.floor(Math.random()*3)
        updateStat(key, rdmInt)

    }
}

function updateStat(stat, value) {
    if (state[stat] + value >= 0) {
        state[stat] += value
    } else {
        state[stat] = 0
    }
}

function continueGame() {
    let currentStats = []
    let keepRunning = true

    for (let key in state) {
        currentStats.push(state[key])
    }

    for (let stat of currentStats) {
        if(stat >= 10) {
            keepRunning = false
        }
    }

    return keepRunning
}

function gameOver() {
    alert('game over')
    clearInterval(timer)
}

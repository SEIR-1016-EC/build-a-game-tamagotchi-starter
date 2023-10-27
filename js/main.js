console.log('js:loaded')

/*----- constants -----*/
// init data states, animation names, img asset paths
// WILL NOT CHANGE

// good to put in an obj if you're going to add on more in the future
const INIT_STATE={
    boredom: 0,
    hunger: 0,
    sleepiness:0,
}
/*----- state variables -----*/
// data that changes while game runs

// let boredom; // interger
// let hunger; // interger
// let sleepiness; // interger
let state;

// icebox features (age cycle)
let age; // interger
let cycles; // interger

let timer; // setInterval id
let interval; // count of cycles

/*----- cached elements  -----*/

const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepyStatEl = document.querySelector('#sleepiness-stat')

// TODO: add cache for game msg string once added to game

const gameBtnEls = document.querySelector('#controller button')

// TODO: add cache for restart button after game over


/*----- event listeners -----*/

gameBtnEls.forEach(function(btn){
    btn.addEventListener('click', handleBtnClick)
})
function handleBtnClick(event){
    console.log(event.target.innterText)

    const convertProp = {
        feed: 'hunger',
        sleep: 'sleepiness',
        play: 'boredom'
    }

    const key = convertProp(event.target.innterText)
    console.log(key)

    updateStat(key, -3)
}

/*----- functions -----*/

init() // starts game when JS loads

function init(){

    state = {...INIT_STATE}
    // taking init state obj -> copy and store
    age=0;
    cycles=0;

    interval = 5000; // milliseconds pass for each cycles
    timer = setInterval(runGame, interval);
    // TODO: init() on load and after a reset
    
    // console.log('game has started')

    render()
} 

// loop func all of logic for game will change state
function runGame(){
    if (continueGame()){
        updateStats()
    }else{
        gameOver()
    }
}

function render(){
    // any features which may update the DOM(UI) will be called by render
    // console.log('rendering game')
    renderStats()
}

function renderStats(){
    // console.log('rendering stats')
    boredomStatEl.textContent = state.boredom
    hungerStatEl.textContent = state.hunger
    sleepyStatEl.textContent = state.sleepiness
}

function updateStats(){
    // call iterator over state - for each stae property, update corresponding key
    // iterate over states {
        // capture random #
        // capture
        // update current

    for (key in state){
        // OLD CODE
            // let randomAmount = Math.floor(Math.random()*3)
            // let currentValue = state[key]
            // state[key] = currentValue + randomAmount
            // console.log(key, state[key], randomAmount)
        updateStat(key, Math.floor(Math.random()*3))
    }
}

function updateStat(stat,value){

    // prevent user from inputting negative values
    if (state[stat] + value >= 0){
        state[stat] += value;
    }else{
        state[stat] = 0;
    }
}

function continueGame(){
    let keepRunning = true
    let currentStats = {}
    // check all properties of state
    // eval if any properties are less than 10
for (let key in state){
    currentStats.push(state[key])
}
console.log(currentStats)
    // if 10 or greater, call gameover()

for (let stat of currentStats){
    if(stat>=10){
        keepRunning = false
    }
    console.log('should I keey going? ' + keepRunning)
}
}

function gameOver(){
    alert('game over!')
    clearInterval(timer)
}
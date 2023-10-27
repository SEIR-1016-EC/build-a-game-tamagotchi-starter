console.log('js loaded')
// script.js
/*----- constants -----*/

const INIT_STATE = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
  };
/*----- state variables -----*/

let state;

let age; // integer
let cycles; // integer

let timer; // object
let interval; // integer

/*----- cached elements  -----*/

const boredomStatEl = document.querySelector("#boredom-stat");
const hungerStatEl = document.querySelector("#hunger-stat");
const sleepyStatEl = document.querySelector("#sleepiness-stat");

const gameMessageEl = document.querySelector("#tama-message");

const gameBtnEls = document.querySelectorAll("button");
const gamePlayAgainEl = document.querySelector("#restart");

/*----- event listeners -----*/
gameBtnEls.forEach(function(btn){
    btn.addEventListener('click', handleBtnClick)
});

/*----- functions -----*/
init();

function handleBtnClick(e) {
    const convertProp = {
        feed: "hunger",
        sleep: "sleepiness",
        play: "boredom",
      };
      const key = convertProp[e.target.innerText];

      updateStat(key, -3);
      render();
}
// Initialize all state, then call render()
function init() {
    state = {...INIT_STATE};

    age = 0;
    cycles = 0;

    interval = 1000;
    timer = setInterval(runGame,interval);

    render();
}

function runGame(){
    if(continueGame()){
        updateStats()
    }else{
        return gameOver();
    }
    
    render();
}

function render(){
    renderStats();
}

function renderStats(){
    boredomStatEl.textContent = state.boredom;
    hungerStatEl.textContent = state.hunger;
    sleepyStatEl.textContent = state.sleepiness;
}

function updateStats(){
    for(key in state){
        /* let randomAmount = Math.floor(Math.random()*3);
        let currentValue =state[key];
        state[key] = currentValue + randomAmount;
        console.log(key, state[key], randomAmount); */
        updateStat(key, Math.floor(Math.random()*3))
    }
}

function updateStat(stat, value){
    if(state[stat] + value >= 0){
        state[stat] += value;
    }else{
        state[stat] = 0;
    }
    
}

function continueGame() {
    const testGame = Object.values(state).every((stat) => stat < 10);
    return testGame;
  }

function gameOver(){
    clearInterval(timer);
}
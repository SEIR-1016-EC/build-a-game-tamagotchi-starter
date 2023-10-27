console.log("js:loaded");

/*----- constants -----*/

const INIT_STATE = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0,
};
/*----- state variables -----*/

let boredom; //integer
let hunger; // integer
let sleepiness; // integer

let state; // object
let age; // integer
let cycles; // integer

let timer; //setInterval id
let interval; //count of cycles

/*----- cached elements  -----*/

const boredomStatEl = document.querySelector("#boredom-stat");
const hungerStatEl = document.querySelector("#hunger-stat");
const sleepyStatEl = document.querySelector("#sleepiness-stat");

// TODO: add cache for game message string once added to game

const gameBtnEls = document.querySelectorAll("#controller button");

/*----- event listeners -----*/
gameBtnEls.forEach(function (btn) {
    btn.addEventListener('click', handleBtnClick);
})

function handleBtnClick(e) {
    console.log(e.target.innerText);

    const convertProp = {
        feed: 'hunger',
        sleep: 'sleepiness',
        play: 'boredom',
};
const key = convertProp[e.target.innerText]
console.log(key)

updateStat(key, -3)

render();
}
/*----- functions -----*/

init(); // starts game when JS loads

function init() {
  state = { ...INIT_STATE };
  age = 0;
  cycles = 0;

  interval = 5000; //count of cycles
  timer = setInterval(runGame, interval);
  // console.log('Game has STARTED!')
  render();
}

function runGame() {
    if(continueGame()){
  updateStats();
} else {
    gameOver();
}
  //    console.log("Game is running")
  render();
}

function render() {
  //   console.log('rendering game')
  renderStats();
}

function renderStats() {
  //    console.log('rendering stats')
  boredomStatEl.textContent = state.boredom;
  hungerStatEl.textContent = state.hunger;
  sleepyStatEl.textContent = state.sleepiness;
}

function updateStats() {
  // TODO: call iterator over state and for each state property update the corresponding key
  // iterate over states {}
  // capture random number
  // update current etc
  for (let key in state) {
    updateStat(key, Math.floor(Math.random() * 3));
  }
}

function updateStat(stat, value) {
  if (state[stat] + value >= 0) {
    state[stat] += value;
  } else {
    state[stat] = 0;
  }
}

function continueGame(){
    let keepRunning = true
    let currentStats = []

    for(let key in state){
        currentStats.push(state[key]);
    }

    for (let stat of currentStats) {
        if (stat >= 10) {
            keepRunning = false;
        }
    }
    return keepRunning;
}

function gameOver() {
    clearInterval(timer);
}
    // console.log(currentStats)
    //     if(stat >=10){
    //         keepRunning = false
    //     }
    
    console.log('should I keep running the game?')



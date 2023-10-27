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

let state;
let age;
let cycles;

let timer; //setInterval id
let interval; //count of cycles

/*----- cached elements  -----*/

const boredomStatEl = document.querySelector("#boredom-stat");
const hungerStatEl = document.querySelector("#hunger-stat");
const sleepyStatEl = document.querySelector("#sleepiness-stat");

// TODO: add cashe for game message string once added to game

const gameBtnEls = document.querySelector("#controller button");

/*----- event listeners -----*/

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
  updateStates();
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
  hungerStatEl.textConect = state.hunger;
  sleepyStatEl.textContent = state.sleepiness;
}

function updateStats() {
  // TODO: call iterator over state and for each state property update the corresponding key
  // iterate over states {}
  // capture random number
  // update current etc
  for (key in state) {
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

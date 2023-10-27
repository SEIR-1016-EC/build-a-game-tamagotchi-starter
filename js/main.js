console.log("js:loaded");

/*----- constants -----*/
const INIT_STATE = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0,
};

/*----- state variables -----*/
let state;
let boredom;
let hunger;
let sleepiness;

let age;
let cycles;

let timer;
let interval;

/*----- cached elements  -----*/
const boredomStatEl = document.querySelector("#boredom-stat");
const hungerStatEl = document.querySelector("#hunger-stat");
const sleepyStatEl = document.querySelector("#sleepiness-stat");

const gameBtnEls = document.querySelectorAll(".controller-button");

/*----- event listeners -----*/
gameBtnEls.forEach((btn) => btn.addEventListener("click", handleBtnClick));

/*----- functions -----*/
function handleBtnClick(e) {
  
  const convertProp = {
    feed: "hunger",
    sleep: "sleepiness",
    play: "boredom",
  };
  
  
  const btnText = convertProp[e.target.innerText];
  
  
  const newValue = -1 * (3 + Math.floor(Math.random() * 3));
  
  
  updateStat(btnText, newValue);

  
  render();
}

init();

function init() {
  state = { ...INIT_STATE };

  age = 0;
  cycles = 0;

  interval = 5000;
  timer = setInterval(runGame, interval);

  render();
}

function runGame() {
  updateStats();
  render();
}
function render() {
  renderStats();
}

function renderStats() {
  boredomStatEl.textContent = state.boredom;
  hungerStatEl.textContent = state.hunger;
  sleepyStatEl.textContent = state.sleepiness;
}

function updateStats() {
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

function continueGame() {
  const testGame = Object.values(state).every((stat) => stat < 10);
  return testGame;
}

function runGame() {
  cycles++;

  if (continueGame()) {
    updateStats();
  } else {
    return gameOver();
  }

  render();
}

function gameOver() {
  alert("Game Over!");

  clearInterval(timer);

  location.reload();
}

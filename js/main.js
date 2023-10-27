console.log("js:loaded");

/*----- constants -----*/
const INIT_STATE = {
  boredom: 6,
  hunger: 6,
  sleepiness: 6,
};

/*----- state variables -----*/
// let boredom; // integer
// let hunger; // integer
// let sleepiness; // integer
let state;

let age; // integer
let cycles; // integer

let timer; // object
let interval; // integer

/*----- cached elements  -----*/

const boredomStatEl = document.querySelector("#boredom-stat");
const hungerStatEl = document.querySelector("#hunger-stat");
const sleepinessStatEl = document.querySelector("#sleepiness-stat");

const gameBtnEls = document.querySelectorAll("#controller button");

/*----- event listeners -----*/
gameBtnEls.forEach(function (btn) {
  btn.addEventListener("click", handleBtnClick);
});
function handleBtnClick(event) {
  console.log(event.target.innerText);
  const convertProp = {
    feed: 'hunger',
    sleep: 'sleepiness',
    play: 'boredom'
  }
  const key = convertProp[event.target.innerText]
  console.log(key)
  updateStat(key, -3)
}

/*----- functions -----*/
// init();
function init() {
  state = { ...INIT_STATE };
  age = 0;
  cycles = 0;
  interval = 5000;
  timer = setInterval(runGame, interval);

  //   console.log("game has started");
  render();
}

function runGame() {
  if (continueGame) {
    updateStats();
  } else {
    gameOver();
  }
  // console.log("game is running");
  continueGame();
  updateStats();
  render();
}

function render() {
  // console.log("rendering game")
  renderStat();
}

function renderStat() {
  boredomStatEl.textContent = state.boredom;
  hungerStatEl.textContent = state.hunger;
  sleepinessStatEl.textContent = state.sleepiness;
}

function updateStats() {
  for (key in state) {
    updateStat(key, Math.floor(Math.random() * 3));
    console.log(key);
  }
}

function updateStat(stat, value) {
  if (state[stat] + value >= 0) {
    state[stat] += value;
  } else {
    state[stat] = 0;
  }
    // console.log(state)
}

function continueGame() {
  let currentStats = [];
  let keepRunning = true;
  for (let key in state) {
    currentStats.push(state[key]);
  }
  console.log(currentStats);
  for (let stat of currentStats) {
    if (stat >= 10) {
      keepRunning = false;
    }
  }
  return keepRunning;
}
function gameOver() {
  alert("GAME OVER");
  clearInterval(timer)
}

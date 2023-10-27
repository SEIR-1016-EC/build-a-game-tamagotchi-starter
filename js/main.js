console.log("js:loaded");

/*----- constants -----*/
const INIT_STATE = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0,
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

/*----- functions -----*/
const runGame = () => {
  console.log("game is running");
};
const render = () => console.log("rendering game");

const init = () => {
  state = { ...INIT_STATE };
  age = 0;
  cycles = 0;
  interval = 5000;
  timer = setInterval(runGame, interval);

  console.log("game has started");
  render();
};

init();

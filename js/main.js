console.log("js:loaded");

/*----- constants -----*/
const INIT_STATE={
  boredom:0,
  hunger:0,
  sleepiness:0
}
/*----- state variables -----*/
let boredom = 0;
let hunger = 0;
let sleepiness = 0;
let state;
let age;
let cycle;

let timersetInterval;
let interval;

/*----- cached elements  -----*/
const boredomStatEl = document.querySelector("#boredom-stat");
const hungerStatEl = document.querySelector("#hunger-stat");
const sleepyStatEl = document.querySelector("#sleepiness-stat");

// TODO: add cached for game message string once addded to game
const gameBtnEls = document.querySelector("#controller button");

// TODO: add cached for restart button after the game is over

/*----- event listeners -----*/

/*----- functions -----*/

//starts game when js is loaded
function init() {
  state={...INIT_STATE}
  //taking teh initial state object and creating copy of its content and 
  //storing it in a new object with assininnng teh new object
  age=0
  cycles=0
  interval=5000 //count of cycles
  timer=(runGame, interval); //setInterval Id
  console.log("game has started");
  render()
}

function runGame(){
  console.log("game is running")
}


function render(){
  console.log("rendering the game")

}
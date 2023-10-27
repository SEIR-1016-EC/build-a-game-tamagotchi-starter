console.log('js:loaded')

/*----- constants -----*/
const INIT_STATE = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
  };


/*----- state variables -----*/
let state
let boredom;
let hunger;
let sleepiness;

let age;
let cycles;

let timer;
let interval;



/*----- cached elements  -----*/
const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepytatEl = document.querySelector('#sleepiness-stat')

const gameBtnEls = document.querySelector('#controller button')

/*----- event listeners -----*/


/*----- functions -----*/

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
    console.log('Game is running')
  }
  function render() {
    console.log('rendering game')
  }

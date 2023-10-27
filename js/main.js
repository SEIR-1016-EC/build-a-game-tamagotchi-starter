console.log('js:loaded')
/*----- constants -----*/
// initial data states
// animation names
// image assets paths

const INIT_STATE = {
    boredom: 0, 
    hunger: 0, 
    sleepiness: 0,
}

/*----- state variables -----*/
// state is the data that will change while the game is running​
// let boredom; // integer
// let hunger; // integer
// let sleepiness; // integer​
let state;

// HFM later on - icebox features (age cycle for tama)
let age;
let cycles; 

let timer; // setInterval id
let interval; // count of cycles 
/*----- cached elements  -----*/
const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepyStatEl = document.querySelector('#sleepiness-stat')

// TODO: add cache for game message string once added to game​
const gameBtnEls = document.querySelectorAll('#controller button')

// TODO: add cache for restart button after game over

/*----- event listeners -----*/

/*----- functions -----*/

init() // starts game when js loads​

function init(){
    // init will start the game and load the initial values for our game state​
    state = {...INIT_STATE} 
    // taking th init state object -> copy of its content and storing into a new object
    // assigning the new object to the state variable

    age = 0 ;
    cycles = 0; 
    interval = 5000; // ms pass for each cycles 
    timer = setInterval(runGame, interval); // setInterval id
    
    // TODO / ICEBOX - init() on load and after a reset (optional)
    
    console.log("game has started")
    
    // it will also call render() -> dom updates (trigger all render helper function -> updating stats)
    render()
}

function runGame(){
    console.log('game is running')
}
function render(){
    console.log('rendering game')
}
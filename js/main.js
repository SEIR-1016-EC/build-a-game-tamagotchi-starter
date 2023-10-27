console.log('js:loaded')

/*----- constants -----*
//initial data states 
//animation names 
//image assets paths


/*----- state variables -----*/
//state is the data that will change while the game is running
let boredom;  //integer
let hunger; //integer
let sleepiness; //integer

let INIT_STATE = {
    boredom:0,
    hunger: 0,
    sleepiness: 0
}

//HFM later on - icebox features (age cycle for tama)
let age;
let cycles;

let timer; //setInterval Id
let interval; //count of cycles

/*----- cached elements  -----*/

const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepyStatEl = document.querySelector('#sleepiness-stat')

//TODO: add ache for game message string once added to game

const gameBtnEls = document.querySelectorAll('#controller button')

//TODO: add cache for restart btton after game over

/*----- event listeners -----*/


/*----- functions -----*/

init() //starts game
//init will start the game and load the initial value for our game state
//init() on load and after a reset (optional)
//it will also call render() -> dom updates
age = 0;
cycles = 0;

interval = 5000; //make sure to set values of params before functions are declared
timer = setInterval(runGame, interval)

//it will also call rend() -> dom updates (trigger all redner hekoer functyions -> updateing stats0)
render() 


function init(){

    state = {...INIT_STATE}
    //taking the init state objec t-> copy of its conent and storing into a new object
    //assinging the new object tot he state varible
    console.log('game has started');
    render();
}

function runGame(){
    console.log('game is running');
}

function render(){
    console('rendering game')
}
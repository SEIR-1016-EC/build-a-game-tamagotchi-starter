console.log('js:loaded');

/*----- constants -----*/


const INIT_STATE = {
    boredom: 7,
    hunger: 7,
    sleepiness: 7,
};

/*----- state variables -----*/
// state is the dfata that will change during the game

// let boredom; //integer
// let hunger; //integer
// let sleepiness; //integer

let state; //object

let age; // integer
let cycles; // integer

let timer; //setInterval id
let interval; // count of cycle

/*----- cached elements  -----*/

const boredomStatEl = document.querySelector("#boredom-stat");
const hungerStatEl = document.querySelector("#hunger-stat");
const sleepyStatEl = document.querySelector("#sleepiness-stat");

// add cache for game message string once added to game //

const gameBtnEls = document.querySelectorAll("#controller button");

/*----- event listeners -----*/

gameBtnEls.forEach(function (btn) {
    btn.addEventListener("click", handleBtnClick)
    });


function handleBtnClick(event) {
    console.log(event.target.innerText);

    const convertProp = {
        feed: "hunger",
        sleep: "sleepiness",
        play: "boredom",    
    };
    
    const key = convertProp[event.target.innerText];
    console.log(key);
    
    updateStat(key, -3);
    
    render();
}

/*----- functions -----*/

Init(); //starts game when js loads

function Init() {
      // init will start the game and load the initial values for our game state

    state = {...INIT_STATE};
      // taking th init state object -> copy of its content and storing into a new object
     // assigning the new object to the state variable

    age = 0;
    cycles= 0;

    interval = 5000; // mss pass for each cycle
    timer = setInterval(runGame, interval); // set interval id
    
    // / ICEBOX - init() on load and after a
    // reset (optional)*//
    // it will also call render() -> dom updates 
    //(trigger all render helper function -> updating stats)
    
    render();
}

function runGame() {
    if (continueGame()) {
        updateStats();
    } else {
        gameOver();
    }
     // game loop function all of the logic for 
    // the game will change state here -> func() -> state
    render();
}

    function render() {
      // any features which might update the dom 
      //(the ui) -> will be called by render
        renderStats();
}
    
    function renderStats() {
        boredomStatEl.textContent = state.boredom;
        hungerStatEl.textContent = state.hunger;
        sleepyStatEl.textContent = state.sleepiness;
}
    
    function updateStats() {
         // call iterator over state and for each state
        //property update the corresponding key
        // iterate over states {}
        // capture random number
        // capture property of state
        // update current state for each key
        for (let key in state) {
            updateStat(key, Math.floor(Math.random() * 3));
    }   
}

    function updateStat(stat, value) {
    // error bounding to help prevent a stat below zero
    
    if(state[stat] + value >= 0) {
        state[stat] += value;
    } else {
        state[stat] = 0;
    }
}

function continueGame(){
    let keepRunning = true;
    let currentStats = [];
    // iterate through state object to check all 
    //values of state {}

    for (let key in state){
        currentStats.push(state[key]);
    }
        // current state represented as an array
        //  console.log(currentStats);
        // check if any of the values are greater than
    
    for (let stat of currentStats){
        if (stat >= 10){
            keepRunning = false;
        }
    }
    return keepRunning;
}

function gameOver(){
    clearInterval(timer);
    // stop the interval calling runGame when 
    // gameOver is called ( the global timer variable 
    //stores an id associated with the interval)
}

// old code
/**
 * 0ld code
*/
// console.log(key)
// let randomAmount = Math.floor(Math.random()*3)
// let currentValue = state(key)
// console.log(key, randomAmount)


// function runGame(){
    // console.log('rendering game')
    //     console.log('the game has started')
    
    //     render()
    // }
    // console.log('game is running')
    // continueGame()
    // updateStats()
    // render()
    // console.log('game has started')
    // console.log('rendering stats')
    // to check all properties of state
    // console.log()
    // evalute if any of those values atre < 10
    
    // if any of them are 10 > call game over
console.log('js:loaded')

/*----- constants -----*/
// initial data states 
// animation names 
// image assets paths 

const INIT_STATE = {
    boredom: 6,
    hunger: 6,
    sleepiness: 6,
};

/*----- state variables -----*/

let state; // object 

//state is the data that will change while the game is running
let boredom; // integer
let hunger; // integer
let sleepiness; // integer

//HFM later on - icebox features (age cycles for tama)
let age; // integer
let cycles; // integer

let timer; //setInterval id // object
let interval; // count of cycles // integer

/*----- cached elements  -----*/

const boredomStateEl = document.querySelector('#boredom-stat'); // # targets the id specifically 
const hungerStateEl = document.querySelector('#hunger-stat');
const sleepyStateEl = document.querySelector('#sleepiness-stat');

// TODO: add cache for game message string once added to game

const gameBtnEls = document.querySelectorAll('#controller button')


// TODO: add cache for restart button after game over 
/*----- event listeners -----*/
gameBtnEls.forEach(function (btn) {
    btn.addEventListener("click", handleBtnClick);
  });

// ICEBOX - after a click remove the listener and then add it back 2 seconds later 
// throttle the user and prevent spamming

function handleBtnClick(event){
    console.log(event.target.innerText);

    const convertProp = {
        feed: "hunger", 
        sleep: "sleepiness",
        play: "boredom",
    };

    const key = convertProp[event.target.innerText];
    console.log(key);

    updateStats(key, -3);

    render();
}
/*----- functions -----*/

init() // starts game when js loads 

 function init(){

        state={...INIT_STATE}
            // taking the init state object 
            //assigning the new object to the state variable

    age= 0; 
    cycles = 0; 

    interval = 5000; // count of cycles 
    timer= setInterval(runGame, interval); //setInterval id 
     


    //console.log("game has started")


    // init will start the game and load the initial values for our game state
    // init will also call render() . -> dom updates 
    //init() on load and after a reset


 }


 function runGame(){
    if (continueGame()){
        updateStats();
    } else {
        gameOver();
    }
    // game loop function all of the logic for the game will change state her ->vfun() -> state 
    //console.log('game is running')

    render();
 }


function render(){

    // any feature which might update the dom (the ui) ->will be called by the render 
    //console.log('game is rendering');
    renderStats();
}

function renderStats() {
    boredomStateEl.textContent = state.boredom;
    hungerStateEl.textContent = state.hunger;
    sleepyStateEl.textContent = state.sleepiness;
  
    // ICEBOX - consider iterator for dynamic render of content
  }

function updateStats(){
    //TODO: call iterator over state and for eavh state property and update the corresponding key 
    // iterate over stats () 
        // capture random number 
        // capture
        //update current etc 
    for (let key in state){
        
       

        updateStat(key, Math.floor(Math.random()*3));
    }
}


function updateStats(stat, value){
        // error boundinng in the code - prevent users from taking a stat below 0
    
    if(state[stat]+value >=0){
        state[stat] += value; 
    } else {
        state[stat]=0;
    }

}

function continueGame(){
    let keepRunning = true;
    let currentStats = [];
    // iterate through state object to check all values of state {}

    //check all properties of state 
    for (let key in state) {
        currentStats.push(state[key]);
    }
    // console.log(currentState)

    for(let stat of currentStats) {
        if (stat >= 10) {
            keepRunning = false;
        }
    }
    // evaluate if any of those values are less than 10 
return keepRunning; // returns either true or false
    // if any of them are 10 > call gameover()


}

function gameOver(){
    clearInterval(timer);
}

// OLD CODE 

 //let randomAmount = Math.floor(Math.randon()*3) // engine for updating state 
        //let currentValue = state[key] // current state value 
        //state[key]= currentValue + randomAmount // updating state with new value 
        //console.log(key, state[key], randomAmount) // test 

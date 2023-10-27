console.log("js:loaded");

/*----- constants -----*/
// initial data states
// animation names
// image assets/paths

const INIT_STATE = {
  boredem: 0,
  hunger: 0,
  sleepiness: 0,
};

/*----- state variables -----*/
// state is the data that will CHANGE while the game is running

// let boredom; // integer
// let hunger; // integer
// let sleepiness; // interger

let state;

// HFM later on - icebox features (aging cycle)
let age; // integer
let cycles; // integer

let timer; // setInterval id
let interval; // count of cycles

/*----- cached elements  -----*/

const boredomStatEl = document.querySelector("#boredom-stat");
const hungerStatEl = document.querySelector("#hunger-stat");
const sleepyStatEl = document.querySelector("#sleepiness-stat");

// TODO: add cache for game message string once added to game

const gameBtnEls = document.querySelectorAll("#controller button");

// TODO: add cache for restart button after game over

/*----- event listeners -----*/
gameBtnEls.forEach(function(btn){
    btn.addEventListener('click', handleBtnClick)
})

function handleBtnClick(event){
    console.log(event.target.innerText)

    const convertProp = {
        feed: 'hunger',
        sleep: 'sleepiness',
        play: 'boredom'
        }

        const key = convertProp[event.target.innerText]
        console.log(key)
}

/*----- functions -----*/
init(); // starts game when js loads

function init() {
  // init will start the game and load the initia values

  state = { ...INIT_STATE }; // taking the INIT_STATE object -> copying its content and storing into a new object - assigning the new object to the state variable

  // console.log(state)

  age = 0;
  cycles = 0;

  interval = 5000; // ms pass for each cycles
  timer = setInterval(runGame, interval); // setInterval id

  //   console.log("game has started");

  // it will also call render() for dom updates (trigger all render helper function -> updating stats)
  render();

  function runGame() {
    if (continueGame()){
        updateStats()
    } else {
        gameOver()
    }
    render()
  }

  // init() on load and after a reset (optional)
}

function runGame() {
  // gmae loop function all of the logic for the game will change state here -> func() -> state
  continueGame();
  //   console.log("game is running");
  updateStats();
  render();
}

function render() {
  // any features which might update the dom (the UI) -> will be called by render()
  //   console.log("rendering game");

  renderStats();
}

function renderStats() {
  //   console.log("rendering stats");
  // stats are actually appearing now

  // if we have a lot of stats, may be good to use an iterator - but only 3 stats so this is fine!
  boredomStatEl.textContent = state.boredem;
  hungerStatEl.textContent = state.hunger;
  sleepyStatEl.textContent = state.sleepiness;
}

function updateStats() {
  // call iterator over state and for each state property, update the corresponding key
  // -> iterating over the state object keys (for/in -> objects, for/of -> arrays)
  for (key in state) {
    // // capture random number
    // let randomAmount = Math.floor(Math.random() * 3);
    // // capture
    // let currentValue = state[key]; // current state value -> object[key] -> going thru each key
    // // update current value
    // state[key] = currentValue + randomAmount; // updating state with new value
    // console.log(key, state[key], randomAmount);

    // after doing above, decided to create an updateStat function instead to perform the same action in a cleaner way
    updateStat(key, Math.floor(Math.random() * 3));
  }
}

function updateStat(stat, value) {
  // if/else - error bounding in the code to prevent users from taking the stat below 0
  if (state[stat] + value >= 0) {
    state[stat] += value;
  } else {
    state[stat] = 0;
  }
}

function continueGame() {
    // key piece that tells us should we keep going, or end the game?
    let keepRunning = true;
  let currentStats = [];
  // check all properties at state
  for (let key in state) {
    currentStats.push(state[key]);
  }
  console.log(currentStats)

  for (let stat of currentStats){
    if(stat >= 10) {
        keepRunning = false
    }
  }

  console.log(keepRunning, 'should I keep going?')
  // evaluate if any of those are values < 10

  // if any > 10 -> call gameOver()
}

function gameOver() {
  console.log("Game over!");
  clearInterval(timer) // stop the interval calling runGame when gameOver is called
}

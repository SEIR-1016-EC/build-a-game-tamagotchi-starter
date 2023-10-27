console.log("js:loaded");

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
`// state is the data that will change while the game is running`

// let boredom; // integer
// let hunger; // integer
// let sleepiness; // integer

let state; // object

// HFM later on - icebox features (age cycle for tama)
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
gameBtnEls.forEach(function (btn) {
  btn.addEventListener("click", handleBtnClick);
});

// ICEBOX - after a click remove the listener and then add it back 2 second later
// throttle the user and prevent spamming

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

init(); // starts game when js loads

function init() {
  // init will start the game and load the initial values for our game state

  state = { ...INIT_STATE };
  // taking th init state object -> copy of its content and storing into a new object
  // assigning the new object to the state variable

  age = 0;
  cycles = 0;

  interval = 5000; // ms pass for each cycles
  timer = setInterval(runGame, interval); // setInterval id

  // TODO / ICEBOX - init() on load and after a reset (optional)
  // it will also call render() -> dom updates (trigger all render helper function -> updating stats)
  render();
}

function runGame() {
  if (continueGame()) {
    updateStats();
  } else {
    gameOver();
  }
  // game loop function all of the logic for the game will change state here -> func() -> state
  render();
}

function render() {
  // any features which might update the dom (the ui) -> will be called by render
  renderStats();
}

function renderStats() {
  boredomStatEl.textContent = state.boredom;
  hungerStatEl.textContent = state.hunger;
  sleepyStatEl.textContent = state.sleepiness;

  // ICEBOX - consider iterator for dynamic render of content
}

function updateStats() {
  // call iterator over state and for each state property update the corresponding key
  // iterate over states {}
  // capture random number
  // capture property of state
  // update current state for each key
  for (let key in state) {
    updateStat(key, Math.floor(Math.random() * 3));
  }
}

function updateStat(stat, value) {
  // error / user limit
  // goal - prevent users from taking a stat below 0

  if (state[stat] + value >= 0) {
    state[stat] += value;
  } else {
    state[stat] = 0;
  }
}

function continueGame() {
  let keepRunning = true;
  let currentStats = [];
  // iterate through state object to check all values of state {}
  for (let key in state) {
    currentStats.push(state[key]);
  }
  // current state represented as an array
  //   console.log(currentStats);

  // check if any of the values are greater than 9
  for (let stat of currentStats) {
    if (stat >= 10) {
      keepRunning = false;
    }
  }
  return keepRunning; // returns either true or false
}

function gameOver() {
  // testing with alert
  clearInterval(timer);
  // stop the interval calling runGame when gameOver is called ( the global timer variable stores an id associated with the interval)
}

/**
 * OLD CODE GOES HERE
 *       // let randomAmount = Math.floor(Math.random()*3) // engine for updating state
        // let currentValue = state[key] // current state value 
        // state[key] = currentValue + randomAmount // updating state with new value
        // console.log(key, state[key], randomAmount) // test
 *
 */

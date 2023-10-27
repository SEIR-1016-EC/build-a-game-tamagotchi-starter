console.log("js:loaded");

/*----- constants -----*/
const INIT_STATE = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0,
};
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
const gameBtnEls = document.querySelectorAll("#controller button");

// TODO: add cached for restart button after the game is over

/*----- event listeners -----*/
gameBtnEls.forEach(function (btn) {
  btn.addEventListener("click", handleBtnClick);
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
}

/*----- functions -----*/
init();

function init() {
  //starts game when js is loaded
  state = { ...INIT_STATE };
  //taking the initial state object and creating copy of its content and
  //storing it in a new object with assining the new object "state"
  age = 0;
  cycles = 0;

  interval = 500; //count of cycles
  timer = setInterval(runGame, interval); //setInterval Id

  console.log("game has started");
  render();
}
function runGame(){
  if (continueGame()) {
    updateStats();
  } else {
    gameOver();
  }
  //game loop function - logic of game will change the state here
  //console.log("game is running")
  render();
}
function render() {
  //any feature might update the dom..ui will be call render
  //
  console.log("rendering the game");
  renderStats();
}
function renderStats() {
  console.log("rendering stats");
  boredomStatEl.textContent = state.boredom;
  hungerStatEl.textContent = state.hunger;
  sleepyStatEl.textContent = state.sleepiness;
}
function updateStats() {
  //ICEBOX - consider iterator for dynamic render of teh content
  //change button background
  //call iterator over state and for each state property update the correponding key
  //itertae over stats
  //capture random number
  //capture
  //update current etc

  for (key in state) {
    //console.log(key)
    // let currentValue=state[key] //grabs the integer value of each key in the state
    // let randomAmount=Math.floor(Math.random()*3)//engine for updating state
    //console.log(key, randomAmount)
    // state[key]= currentValue+randomAmount
    // console.log(key, state[key], randomAmount)

    updateStat(key, Math.floor(Math.random() * 3));
  }
}
function updateStat(stat, value) {
  //error bounding in teh core - prevent user from taking stat below 0
  if (state[stat] + value >= 0) {
    state[stat] += value;
  } else {
    state[stat] = 0;
  }
}
function continueGame() {
  //determin if the game is over or not
  // to check all properties of state and evalue if any of those
  //values <10
  let currentStats = [];
  let keepRunning = true;
  for (let key in state) {
    currentStats.push(state[key]);
  }
  console.log(currentStats);

  //if any of them are 10 or greater then render  -> call gameOver()

  for (let stat of currentStats) {
    if (stat >= 10) {
      keepRunning = false;
    }
  }
  console.log(keepRunning, "should I keep going?");
  return keepRunning;
}
function gameOver() {
  console.log("GAME OVER!");
  clearInterval(timer);
  //stop timer once gameOver is called
}

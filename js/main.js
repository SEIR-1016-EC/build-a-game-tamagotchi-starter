console.log('js:loaded')


const INIT_STATE = {
    boredom: 6, 
    hunger: 4, 
    sleepiness: 9,
}

/*----- state variables -----*/
// state is the data that will change while the game is running

// let boredom; // integer
// let hunger; // integer
// let sleepiness; // integer

let state;

let age;
let cycles; 

let timer; 
let interval; 

/*----- cached elements  -----*/

const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepyStatEl = document.querySelector('#sleepiness-stat')

// TODO: add cache for game message string once added to game

const gameBtnEls = document.querySelectorAll('#controller button')

// TODO: add cache for restart button after game over

/*----- event listeners -----*/

gameBtnEls.forEach(function(btn){
    btn.addEventListener('click', handleBtnClick)
})

function handleBtnClick(event){
    console.log(event.target.innerText)

    const convertProp = {
        feed: "hunger",
        sleep: "sleepiness",
        play: "boredom",
    }

    const key = convertProp(event.target.innerText)
    console.log(key)

    updateStat(key, -3)
    render()
}


/*----- functions -----*/

init() // starts game when js loads
function init(){
  
    state = {...INIT_STATE} 
    
    age = 0;
    cycles = 0; 

    interval = 5000; 
    timer = setInterval(runGame, interval); 
    render()
}

function runGame(){
    updateStats()
    render()
}

function render(){
    renderStats()
}

function renderStats(){
    // console.log('rendering stats')
    boredomStatEl.textContent= state.boredom
    hungerStatEl.textContent= state.hunger
    sleepyStatEl.textContent= state.sleepiness
    
}

function runGame() {
    cycles++;
    
  
    if (continueGame()) {
      updateStats();
  
    } else {
      return gameOver();
    }
  
    render();
  }
  
  function continueGame() {
    const testGame = Object.values(state).every((stat) => stat < 10);
    return testGame;
  }
  
  function updateStats() {
    for (key in state) {
      updateStat(key, Math.floor(Math.random() * 3));
    }
  }
  
  function updateStat(stat, value) {
    if (state[stat] + value >= 0) {
      state[stat] += value;
    } else {
      state[stat] = 0;
    }
  }
  
  function gameOver() {
   console.log('game over!')
   clearInterval(timer)
   init()
  }
  
  function resetUI() {
    gamePlayAgainEl.classList.add("hidden");
    gameMessageEl.classList.add("hidden");
  }
  
  init();
  
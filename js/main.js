console.log('js:loaded')

/*----- constants -----*/

const INIT_STATE = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
  };
  

  
  /*----- state variables -----*/
  let state;
  
  let age; 
  let cycles; 
  
  let timer; 
  let interval; 
  
  /*----- cached elements  -----*/
  
  const boredomStatEl = document.querySelector("#boredom-stat");
  const hungerStatEl = document.querySelector("#hunger-stat");
  const sleepyStatEl = document.querySelector("#sleepiness-stat");
  
  const gameMessageEl = document.querySelector("#tama-message");
  
  const gameBtnEls = document.querySelectorAll("button");
  const gamePlayAgainEl = document.querySelector("#restart");
  
  /*----- event listeners -----*/
  gameBtnEls.forEach((btn) => btn.addEventListener("click", handleBtnClick));
  gamePlayAgainEl.addEventListener("click", init);
  
  /*----- functions -----*/
  
  function handleBtnClick(e) {
    
    // local conversion object
    const convertProp = {
      feed: "hunger",
      sleep: "sleepiness",
      play: "boredom",
    };
    
    // capture the button text and map it to the state property
    const btnText = convertProp[e.target.innerText];
    
    // calculate a random value between 0 -> 3 and convert it to a negative number
    const newValue = -1 * (3 + Math.floor(Math.random() * 3));
    
    // reuse update state, targeting the correct state property and providing a decrementing value 
    updateStat(btnText, newValue);
  
    // update the user with new data info
    render();
  }
  
  
  function init() {
    
    resetUI();
    
    state = { ...INIT_STATE };
  
    age = 0; 
    cycles = 0; 
  
    interval = 1000; 
    timer = setInterval(runGame, interval); 
  
    render();
  }
  
  function render() {
    renderStats();

  }
  
  function renderStats() {
    boredomStatEl.textContent = state.boredom;
    hungerStatEl.textContent = state.hunger;
    sleepyStatEl.textContent = state.sleepiness;
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
 
    gamePlayAgainEl.classList.remove("hidden");
    gameMessageEl.classList.remove("hidden");
    

    clearInterval(timer);
  }
  
  function resetUI() {
    gamePlayAgainEl.classList.add("hidden");
    gameMessageEl.classList.add("hidden");
  }
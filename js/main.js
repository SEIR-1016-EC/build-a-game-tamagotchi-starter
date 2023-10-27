console.log('js:loaded')

/*----- constants -----*/

const INIT_STATE ={
    boredom: 6,
    hunger: 6,
    sleepiness: 6,
};
/*----- state variables -----*/
let state;
//let boredom;
//let hunger;
//let sleepiness;
let timer;
let interval;

/*----- cached elements  -----*/

const boredomStateEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const  sleepyStatEl = document.querySelector('#sleepiness-stat')

const gameBtnsEls = document.querySelectorAll('#controller button')

/*----- event listeners -----*/
gameBtnsEls.forEach(function (btn){
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
init();

function init(){

    state ={...INIT_STATE};
    
    age = 0;
    cycles = 0;
    interval = 5000;
    timer = setInterval(runGame, interval);

    //console.log("game has started")

    render();
}

function runGame(){
    if (continueGame()){
        updateStats()

    }else {
        renderStats();
    }
    //console.log("game is running")
    render();

function render(){
    //console.log('rendering game')
    renderStats();
}

function renderStats(){
    //console.log('rendering stats')
    boredomStateEl.textContent = state.boredom
    hungerStatEl.textContent = state.hunger
    sleepyStatEl.textContent = state.sleepiness
}

function updateStats(){
    for (let key in state){
        updateStat(key, Math.floor(Math.random()*3));
        //let randomAmount = Math.floor(Math.random()*3)
        //let currentValue = state[key]
        //state[key] = currentValue + randomAmount
        //console.log(key, state[key], randomAmount)
    }
}

function updateStat(stat, value){
    if(state[stat] + value >= 0){
        state[stat] += value;
    } else {
        state[stat] = 0;
    }
}

function continueGame(){
    let keepRunning = true;
    let currentStats = [];
    for(let key in state){
        currentStats.push(state[key])
    }
    console.log(currentStats)

    for(let stat of currentStats){
        if(stat >= 10){
            keepRunning = false
        }
    }
    return keepRunning;
   // console.log(keepRunning, "should I keep going?")

}
}

function gameOver(){
    console.log('game over!')
    clearInterval(timer)
    init()
}
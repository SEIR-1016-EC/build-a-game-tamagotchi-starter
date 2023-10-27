const INIT_STATE = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
  };

let state;
let age;
let cycles; 
let timer;
let interval;

const boredomStatEl = document.querySelector('#boredom-stat');
const hungerStatEl = document.querySelector('#hunger-stat');
const sleepyStatEl = document.querySelector('#sleepiness-stat');


const gameBtnEls =document.querySelectorAll('#controller button')


gameBtnEls.forEach(function(btn){
    btn.addEventListener('click',handleBtnClick)
})

function handleBtnClick(event){
    const convertProp ={
        feed:'hunger',
        sleeps: 'sleepiness',
        play: 'boredom'
       
      
    }

    const key = convertProp[event.target.innerText]
    updateStats(key,-3)
    render()
}
init()

function init(){
    state = {...INIT_STATE}
    age =0
    cycles =0
    interval =5000
    timer =setInterval(runGame,interval)
    render()
}
function runGame(){
    if(continueGame()){
        updateStats();
    }
    else{
        gameOver();
    }
    render()
}
function gameOver(){
    clearInterval(timer)
}


function render(){
    renderState()
}

function renderState() {
    boredomStatEl.textContent =state.boredom
    hungerStatEl.textContent =state.hunger
    sleepyStatEl.textContent = state.sleepiness
}

function  updateStats(){
    for(key in state){
       // console.log(key)
       // let randomAmount = Math.floor(Math.random() * 3)
        //let currentValue = state[key]
       // state[key] =currentValue + randomAmount
        updateStat(key, Math.floor(Math.random()*3) )

        
    }
}
function updateStats(stat,value){if
    (state[stat]+ value >=0){
    state[stat] += value;
}
else {
    state[stat] =0;
}

}
function continueGame(){
    let continueGame = true 
    let curentStats =[]
    for(let key in state){
        curentStats.push(state[key])
    }
    for(let stat of curentStats){
        if(stat >= 10){
            continueGame =false
        }
    }
    return continueGame
}




/*----- constants -----*/
const INIT_STATE = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
}

/*----- state variables (things which will change) -----*/

let state;

let boredom; //int
let hunger; // int
let sleepiness // int


// HFM aging cycle
let age;
let cycles;

let timer; // setInterval id
let interval; // count of cycles

/*----- cached elements  -----*/

const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepyStatEl = document.querySelector('#sleepiness-stat')

// TODO: add cache for game message string once added

const gameBtnEls = document.querySelectorAll('#controller button')



/*----- event listeners -----*/
gameBtnEls.forEach(function(btn){
    btn.addEventListener('click', handleBtnClick)
})

function handleBtnClick(event){
    console.log('Clicked ' + event.target.innerText)

    const convertProp = {
        feed: 'hunger',
        sleep: 'sleepiness',
        play: 'boredom'
    }

    const key = convertProp[event.target.innerText]

    updateStat(key, -3)
}

/*----- functions -----*/

init() //starts game

function init(){
    
    state = {...INIT_STATE} // takes copy of INIT_STATE and makes a copy, 'refreshes'

    age = 0
    cycles = 0
    interval = 3000
    timer = setInterval(runGame, interval)

    console.log('game has started')
    continueGame()

    // DOM updates
    render()
}

function runGame() {
    cycles++;
    
  
    if (continueGame()) {
      updateStats();
  
      // Icebox - call checkAge helper function to age up Tama
      // Icebox - add aging cycle to calculate aging up tama as a factor of cycles.
      // Icebox - add a message render state or game engine for parsing the state > UI changes. 
  
    } else {
      // if any stat is >= 10 -> end game cycle
      return gameOver();
    }
  
    render();
  }  

function render(){
    // updates DOM
    renderStats()
}

function renderStats(){
    boredomStatEl.textContent = state.boredom
    hungerStatEl.textContent = state.hunger
    sleepyStatEl.textContent = state.sleepiness
}

function updateStats(){
    // call iterator over stat and for each state property update key
    // iterate over state {}   
        // capture ran num
        // update stat
    
    for(key in state){
        updateStat(key, Math.floor(Math.random()*3))
    }
}

function updateStat( stat, value){
    if(state[stat]+value >=0){
        state[stat] += value
    } else {
        state[stat] = 0
    }

}

function continueGame(){
    // check all properties of state
    // evaluate if all less than 10
    // if great, game over
    let keepRunning = true
    let currentStats = []
    for(let key in state){
        currentStats.push(state[key])
    }

    for(let stat of currentStats){
        if(stat >=10){
            keepRunning = false
        }
    }
    return keepRunning
}


function gameOver(){
    console.log('Game over!')
    // alert('game over!')
      // stop timer
  clearInterval(timer);

//   location.reload()
}





/** OLD CODE
 *         // let randomAmount = Math.floor(Math.random()*3)
        // let currentValue = state[key]
        // state[key] = currentValue + randomAmount
        // console.log(key, state[key], randomAmount)
 * 
 */
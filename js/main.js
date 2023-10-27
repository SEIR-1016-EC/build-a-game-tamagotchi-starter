
//use for of loops for iterating in arrays 
//use for in loops for iterating in objects

/*----- constants -----*
//initial data states 
//animation names 
//image assets paths


/*----- state variables -----*/
//state is the data that will change while the game is running
let boredom;  //integer
let hunger; //integer
let sleepiness; //integer

const INIT_STATE = {
     boredom: 0,  //integer
     hunger: 0, //integer
     sleepiness: 0
};

//HFM later on - icebox features (age cycle for tama)
let age;
let cycles;

let timer; //setInterval Id
let interval; //count of cycles

/*----- cached elements  -----*/

const boredomStatEl = document.querySelector('#boredom-stat'); 
const hungerStatEl = document.querySelector('#hunger-stat');
const sleepyStatEl = document.querySelector('#sleepiness-stat');

//In game messages

const gameMessageEl = document.querySelector('#tama-message')

//TODO: add ache for game message string once added to game
const gameBtnEls = document.querySelectorAll('#controller button')
const gamePlayAgainEl = document.querySelector('#restart');

//TODO: add cache for restart btton after game over

/*----- event listeners -----*/


gameBtnEls.forEach(function (btn){
    btn.addEventListener('click', handleBtnClick)
});

gamePlayAgainEl.addEventListener('click', init)

//icebox -after a click remove th lisener and then add it back 2 seconds later
//throttle the user and rpevent spammming

function handleBtnClick(event){
    console.log(event.target.innerText)

        const convertProp = {
            feed: 'hunger', 
            sleep: 'sleepiness', 
            play: 'boredom'
        }
    const key = convertProp[event.target.innerText]

    updateStat(key, -3);
    render();
}




/*----- functions -----*/

init(); //starts game
//init will start the game and load the initial value for our game state
//init() on load and after a reset (optional)
//it will also call render() -> dom updates


//it will also call rend() -> dom updates (trigger all redner hekoer functyions -> updateing stats0)
render() 


function init(){

    resetUI();

    age = 0;
    cycles = 0;

    interval = 500; //make sure to set values of params before functions are declared
    timer = setInterval(runGame, interval)

    state = {...INIT_STATE}
    //taking the init state objec t-> copy of its conent and storing into a new object
    //assinging the new object tot he state varible
 
    render();

    console.log(state);
}

function runGame(){
    if (continueGame()){
        updateStats();
    }else{
        gameOver();
    }
    
}

function render(){
//any featuers that might update DOM (UI) -> will be called by render
 
    renderStats()
}

function renderStats(){
boredomStatEl.textContent = state.boredom;
hungerStatEl.textContent = state.hunger;
sleepyStatEl.textContent = state.sleepiness;

//icebox - consider iterator for dnsmic render of content
}


function updateStats(){
    //call iterator over state and for each state property update the corresponding keu
    //iterate over stat {}
    //capture random number
    //update current 

    for(key in state){

        updateStat(key, Math.floor(Math.random()*3))
    }
}

 function updateStat(stat, value){
    //error bounding in code - prevent users from lowering stat belower 0
    if(state[stat]+value >= 0){
        state[stat] += value;
    }else{
        state[stat] = 0;
    }
}

function continueGame(){
    //check all properties of state
    //evaluate if any of those values are less than ten

    //if any of them are 10 or more, then call gameOver
    let keepRunning = true;
    let currentStats = [];

    for(let key in state){
        currentStats.push(state[key])
    }

    for(let stat of currentStats){
        if(stat >=10){
            keepRunning = false; 
        }
    }

    console.log(currentStats);
    return keepRunning;

}



function gameOver(){

    //the way to get ethe game to end is to stop the initialising
    //ie stop the timer from runnig 

    clearInterval(timer); 
    //stop the interval calling runGame when gameOver is called

    gamePlayAgainEl.classList.remove('hidden');
    gameMessageEl.classList.remove('hidden');


}

function resetUI(){
    //hides reset buttons, and losing message
   
    gamePlayAgainEl.classList.add('hidden'); 
    gameMessageEl.classList.add('hidden');
}


 /** 
  *         previous updateStats function
  *  // let randomAmount = Math.floor(Math.random()*3) //engine for update state
        // let currentVlaue = state[key]; //current state value
        // state[key] = currentVlaue + randomAmount; //updating state with new value
        // console.log(key, randomAmount); //test
  * 
  * 
 */
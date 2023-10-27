console.log('js:loaded')


const INIT_STATE = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
  };

/*----- constants -----*/
let boredom; // integer
let hunger; // integer
let sleepiness; // integer 

let age;
let cycles; 

// HFM later on - icebox features (age cycles for tama)
let timer; // setInterval id
let interval;

/*----- state variables -----*/


/*----- cached elements  -----*/
 const boredomStatEl = document.querySelector('#boredom-stat')
 const hungerStatEl = document.querySelector('#hunger-stat')
 const sleepyStatEl = document.querySelector('#sleepiness-stat')

// To Do: add cache for game message string once added to game
 const gameBtnElms = document.querySelectorAll('#controller button')
 // To Do: add cache for restart button after game over

/*----- event listeners -----*/


/*----- functions -----*/

function init() {
    // clear the end-game message

    // overwrite the old state with a copy of the original state values
    state = { ...INIT_STATE };
   // - assigning the new object to the state variable, creating a 'refresh of the state'

    age = 0; // integer
    cycles = 0; // integer
  
    interval = 1000; // integer
    timer = setInterval(runGame, interval); // object
  
    render();
  }

  function runGame(){
    console.log('game is running"')

}

   function render() {
        renderStats();
    console.log('game has ended')
      }
 
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

const boredomStatEl = document.querySelector('#boredem-stat');
const hubgerStatEl = document.querySelector('#hunger-stat');
const gamePlayAgainEl = document.querySelector('#sleppiness-stat');


const gameBtnEls =document.querySelectorAll('#controller button')
init()
function init(){
    state = (...INIT_STATE)
    age =0
    cycles =0
    interval =5000
    timer =setInterval(runGame,interval)
    console.log('game has started')
    render()
}

function runGame(){
    console.log
    ("game is winning")

}
function render(){
    consoel.log("rendering game")
}

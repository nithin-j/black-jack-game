let firstCard = 8
let secondCard = 11
let hasBlackJack = false
let isAlive = true
let message = ''

let sum = firstCard + secondCard

let continueGame = document.getElementById('btn-continue')
let saveGame = document.getElementById('btn-save')
let startGame = document.getElementById('btn-start')


function fnStartGame(){
    if (sum <= 20){
        message = 'Do you want to draw another card?)'
    } else if (sum === 21){
        message = 'Hoooray!!!!!!, You won the jack pot, party'
        hasBlackJack = true
    } else{
        message = 'Saaaad, You are out of the game, better luck next time'
        isAlive = false 
    }
    
    console.log(isAlive)
    if(isAlive){
        continueGame.hidden = false
    }
    saveGame.hidden = false
    startGame.hidden = true
}

function fnSaveGame(){
    continueGame.hidden = true
    startGame.hidden = false
    saveGame.hidden = true
}

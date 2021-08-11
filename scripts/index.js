let firstCard = 8
let secondCard = 11
let hasBlackJack = false
let isAlive = true
let message = 'Do you wanna give it a shot?'

let sum = firstCard + secondCard

let continueGame = document.getElementById('btn-new-card')
let saveGame = document.getElementById('btn-save')
let startGame = document.getElementById('btn-start')
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl= document.getElementById('cards-el')


messageEl.textContent = message

function fnStartGame(){
    if (sum <= 20){
        message = 'Do you want to draw another card?'
    } else if (sum === 21){
        message = "Congradulations, That's a BlackJack"
        hasBlackJack = true
    } else{
        message = 'You are out of the game, better luck next time.'
        isAlive = false 
    }
    
    console.log(isAlive)
    if(isAlive){
        continueGame.hidden = false
    }
    saveGame.hidden = false
    startGame.hidden = true

    messageEl.textContent = message
    sumEl.textContent = `${sumEl.textContent}: ${sum}`
    cardsEl.textContent = `${cardsEl.textContent}: ${firstCard}, ${secondCard}`
}

function fnSaveGame(){
    continueGame.hidden = true
    startGame.hidden = false
    saveGame.hidden = true
}

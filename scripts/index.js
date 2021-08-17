let cardsArray =[]
let hasBlackJack = false
let isAlive = false
let message = 'Do you wanna give it a shot?'
let sum = 0


let continueGame = document.getElementById('btn-new-card')
let saveGame = document.getElementById('btn-save')
let startGame = document.getElementById('btn-start')
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl= document.getElementById('cards-el')


messageEl.textContent = message

function fnStartGame(){

    cardsArray = [getRandomCard(), getRandomCard()]
    cardsArray.forEach(card =>{
        sum += card
    })
    hasBlackJack = false
    isAlive = true
    fnPlayGame()
    
}

function fnPlayGame(){
    if (sum <= 20){
        message = 'Do you want to draw another card?'
    } else if (sum === 21){
        continueGame.hidden = true
        message = "Congratulations, That's a BlackJack"
        hasBlackJack = true
    } else{
        continueGame.hidden = true
        message = 'You are out of the game, better luck next time.'
        isAlive = false 
    }
    

    if(isAlive && !hasBlackJack){
        continueGame.hidden = false
    }
    saveGame.hidden = false
    startGame.hidden = true

    messageEl.textContent = message
    sumEl.textContent = `Sum: ${sum}`
    cardsEl.textContent = `Cards: ${cardsArray}`
}

function fnSaveGame(){

    messageEl.textContent = 'Do you wanna give it a shot?'
    sumEl.textContent = ''
    cardsEl.textContent = ''
    continueGame.hidden = true
    startGame.hidden = false
    saveGame.hidden = true

    sum = 0
    cardsArray.length = 0
    
}

function fnDrawNewCard(){
    message = 'Drawing a new card from the deck'
    messageEl.textContent = message

    cardsArray.push(getRandomCard())
    sum = 0
    cardsArray.forEach(card =>{
        sum += card
    })

    fnPlayGame()

}

function getRandomCard(){

    let randomCard = Math.floor(Math.random() * 13) + 1
    console.log(randomCard)
    if (randomCard === 1){
        return 11
    }
    else if(randomCard >= 11 && randomCard <= 13){
        return 10
    }
    else{
        return randomCard
    }
}

console.log(getRandomCard())

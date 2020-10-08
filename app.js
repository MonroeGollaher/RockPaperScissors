
// GAME PLAY 

function play(playerChoice){
    let computerChoice = cpuPlay()
    let resultElem = document.getElementById("result")

    // if (playerChoice == 'paper') {
    //     resultElem.innerText = 'You won!'
    // } else if(playerChoice == 'scissors') {
    //     resultElem.innerText = 'You lost!'
    // } else {
    //     resultElem.innerText = 'Tie'
    // }

    if (computerChoice == 'rock' && playerChoice == 'rock') {
        resultElem.innerText = 'Tie'
    } else if(computerChoice == 'rock' && playerChoice == 'paper'){
        resultElem.innerText = 'You won!'
    } else if(computerChoice == 'rock' && playerChoice == 'scissors'){
        resultElem.innerText = 'The Computer Won'
    } else if(computerChoice == 'paper' && playerChoice == 'rock') {
        resultElem.innerText = 'The Computer Won'
    } else if(computerChoice == 'paper' && playerChoice == 'paper'){
        resultElem.innerText = 'Tie'
    } else if(computerChoice == 'paper' && playerChoice == 'scissors'){
        resultElem.innerText = 'You won!'
    } else if(computerChoice == 'scissors' && playerChoice == 'rock'){
        resultElem.innerText = 'You won!' 
    } else if(computerChoice == 'scissors' && playerChoice == 'paper'){
        resultElem.innerText = 'The Computer Won' 
    } else if(computerChoice == 'scissors' && playerChoice == 'scissors'){
        resultElem.innerText = 'Tie'
    }

    console.log("Player Choice: ", playerChoice)
    console.log("Computer Choice:", computerChoice)

    playerResults(computerChoice, playerChoice)
}

// RANDOM COMPUTER CHOICE

function cpuPlay() {
    let cpuChoice = ['rock', 'paper', 'scissors']
    let rand = cpuChoice[Math.floor(Math.random()*cpuChoice.length)]

    return rand
}

function playerResults(cChoice, pChoice) {
    let choicesElem = document.getElementById("playerChoice")
    let cpuChoicesElem = document.getElementById("cpuChoice")

    choicesElem.innerText = pChoice
    cpuChoicesElem.innerText = cChoice
}
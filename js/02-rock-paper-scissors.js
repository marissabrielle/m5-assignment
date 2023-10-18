// Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:

// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.
// Our code will break the game into 3 phases:

function playGame() {

// User makes a choice. How will we collect the user’s choice?
let userChoice = prompt('Choose rock, paper, or scissors.').toLowerCase()

// Computer makes a= choice. How will we collect the computer’s choice?
let choices = ['rock', 'paper', 'scissors'];
let compChoice = choices[Math.floor(Math.random() * choices.length)];  
  
// console.log(compChoice);  

// A conditional that determines who wins.
if (userChoice === compChoice) { 
    alert(`You both picked the same thing, it's a tie!`)
}

else if(userChoice === 'rock' && compChoice === 'paper') {
    alert(`The computer picked ${compChoice}. Rock beats paper, you win!`)
}

else if(userChoice === 'paper' && compChoice === 'rock') {
    alert(`The computer picked ${compChoice}. Rock beats paper, you lose.`)
}

else if(userChoice === 'scissors' && compChoice === 'paper') {
    alert(`The computer picked ${compChoice}. Scissors beats paper, you win!`)
}

else if(userChoice === 'paper' && compChoice === 'scissors') {
    alert(`The computer picked ${compChoice}. Scissors beats paper, you lose.`)
}

else if(userChoice === 'rock' && compChoice === 'scissors') {
    alert(`The computer picked ${compChoice}. Rock beats scissors, you win!`)
}

else if(userChoice === 'scissors' && compChoice === 'rock') {
    alert(`The computer picked ${compChoice}. Rock beats scissors, you lose.`)
}

else {
    alert(`Your entry wasn't valid.`)
    return
}
}

playGame()
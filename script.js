const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const restartBtn = document.getElementById('resetGame');

let playerScore = 0;
let computerScore = 0;
let winner = '';

const getComputerChoice = () => {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    const win = `You Win!! ${playerSelection} beats ${computerSelection}`;
    const lose = `You Lose!! ${computerSelection} beats ${playerSelection}`;
    const draw = `It's a draw! You both chose ${playerSelection}`;

    if (playerScore === 5) {
        console.log( `Player wins!`);
    } else if (computerScore === 5) {
        console.log(`Computer wins!`);
    }

    console.log(computerScore, playerScore);
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return draw;
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        computerScore += 1;
        return lose;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        playerScore += 1;
        return win;
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
       playerScore += 1;
        return win;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        computerScore += 1;
        return lose;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        computerScore += 1;
        return lose;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        playerScore += 1;
        return win;
    }

  
}


rockBtn.addEventListener('click', () => {
    return playRound(rockBtn.id, getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    return playRound(paperBtn.id, getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
    return playRound(scissorsBtn.id, getComputerChoice());
});

restartBtn.addEventListener('click', () => {
    console.log('Game reseted');
    playerScore = 0;
    computerScore = 0;
});



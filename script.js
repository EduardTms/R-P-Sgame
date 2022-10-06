const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const restartBtn = document.getElementById('resetGame');
const pScore = document.querySelector('.player');
const cScore = document.querySelector('.computer');
const roundWinner = document.querySelector('.roundWinner');
let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}


const displayScore = (computerScore, playerScore) => {
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
}

const displayWinner = (computerScore, playerScore) => {
    if (playerScore === 5) {
        pScore.textContent = `Player wins!`;
        cScore.textContent = `:(`;
        roundWinner.textContent = `To start a new game press 'Play Again!'`;
    } else if (computerScore === 5) {
        cScore.textContent = `Computer wins!`;
        pScore.textContent = `:(`;
        roundWinner.textContent = `To start a new game press 'Play Again!'`;
    }
}



function playRound(playerSelection, computerSelection) {
    const win = `You Win!! ${playerSelection} beats ${computerSelection}`;
    const lose = `You Lose!! ${computerSelection} beats ${playerSelection}`;
    const draw = `It's a draw! You both chose ${playerSelection}`;

    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        roundWinner.textContent = draw;
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        computerScore += 1;
        roundWinner.textContent = lose;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        playerScore += 1;
        roundWinner.textContent = win;
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
       playerScore += 1;
        roundWinner.textContent = win;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        computerScore += 1;
        roundWinner.textContent = lose;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        computerScore += 1;
        roundWinner.textContent = lose;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        playerScore += 1;
        roundWinner.textContent = win;
    }
    displayScore(computerScore,playerScore);
    displayWinner(computerScore,playerScore);
    restartBtn.addEventListener('click', () => {
        window.location.reload();
    });
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




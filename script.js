const getComputerChoice = () => {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    // const win = `You Win!! ${playerSelection} beats ${computerSelection}`;
    // const lose = `You Lose!! ${computerSelection} beats ${playerSelection}`;
    // const draw = `It's a draw! You both chose ${playerSelection}`;

    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return undefined;
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        return false;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        return true;
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        return true;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        return false;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        return false;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        return true;
    }
}

function bestOf5() {
    let count = 0;
    for(i=0; i<5; i++) {
        let player = prompt('Rock Paper or Scissors: '); 
        let computer = getComputerChoice();
        let result = playRound(player,computer);
        if(result === true) {
            count++;
        } else if (result === false){
            count--;
        }
    }
    return winner(count);
}

const winner = (count) => {
    if(count < 2) {
        return 'Player loses!';
    } else {
        return 'Player wins!';
    }
}


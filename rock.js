let humanScore = 0;
let botScore = 0;

function botOutput() {
    let randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        console.log('rock');
        return 'rock';
    } else if (randomNumber < 2 / 3) {
        console.log('paper');
        return 'paper';
    } else {
        console.log('scissors');
        return 'scissors';
    }
}

function gameLogic(BotOutput, HumanChoice) {
    if (HumanChoice !== 'rock' && HumanChoice !== 'paper' && HumanChoice !== 'scissors') {
        return; // Exit the function if HumanChoice is invalid
    }

    if ((HumanChoice == 'paper' && BotOutput == 'rock') ||
        (HumanChoice == 'scissors' && BotOutput == 'paper') ||
        (HumanChoice == 'rock' && BotOutput == 'scissors')) {
        humanScore += 1;
        console.log('Human score:', humanScore);
    } else if (HumanChoice == BotOutput) {
        console.log('Draw');
    } else {
        botScore += 1;
        console.log('Bot score:', botScore);
    }

    if (humanScore == 3) {
        console.log('You win!');
        let gameDone = true
    } else if (botScore == 3) {
        console.log('You lose!');
        let gameDone = true
    }
}

document.querySelector('#rock').addEventListener('click', () => {

    playGame('rock');
});

document.querySelector('#paper').addEventListener('click', () => {
    playGame('paper');
});

document.querySelector('#scissors').addEventListener('click', () => {
    playGame('scissors');
});

function playGame(HumanChoice) {
    let BotOutput = botOutput();
    gameLogic(BotOutput, HumanChoice)
}
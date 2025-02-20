let humanScore = 0;
let botScore = 0;
let gameDone = false;

function botOutput() {
    let randomNumber = Math.random();
    let botChoice = document.getElementById('botchoice');
    if (randomNumber < 1 / 3) {
        botChoice.textContent = 'rock';
        console.log('rock');
        return 'rock';
    } else if (randomNumber < 2 / 3) {
        botChoice.textContent = 'paper';
        console.log('paper');
        return 'paper';
    } else {
        botChoice.textContent = 'scissors';
        console.log('scissors');
        return 'scissors';
    }
}

function gameLogic(BotOutput, HumanChoice) {
    if ((HumanChoice === 'paper' && BotOutput === 'rock') ||
        (HumanChoice === 'scissors' && BotOutput === 'paper') ||
        (HumanChoice === 'rock' && BotOutput === 'scissors')) {
        humanScore += 1;
        document.getElementById('humancount').textContent = humanScore;
        console.log('Human score:', humanScore);
    } else if (HumanChoice === BotOutput) {
        console.log('Draw');
    } else {
        botScore += 1;
        document.getElementById('botcount').textContent = botScore;
        console.log('Bot score:', botScore);
    }

    if (humanScore === 3) {
        document.getElementById('score').textContent = "You win!";
        console.log('You win!');
        gameDone = true;
    } else if (botScore === 3) {
        document.getElementById('score').textContent = "You lose!";
        console.log('You lose!');
        gameDone = true;
    }
}

function resetGame() {
    humanScore = 0;
    botScore = 0;
    gameDone = false;
    document.getElementById('score').textContent = "Score";
    document.getElementById('botcount').textContent = botScore;
    document.getElementById('humancount').textContent = humanScore;
    document.getElementById('humanchoice').textContent = "";
    document.getElementById('botchoice').textContent = "";
}

document.querySelector('#rock').addEventListener('click', () => {
    if (!gameDone) {
        playGame('rock');
        document.getElementById('humanchoice').textContent = 'rock';
    } else {
        resetGame();
    }
});

document.querySelector('#paper').addEventListener('click', () => {
    if (!gameDone) {
        playGame('paper');
        document.getElementById('humanchoice').textContent = 'paper';
    } else {
        resetGame();
    }
});

document.querySelector('#scissors').addEventListener('click', () => {
    if (!gameDone) {
        playGame('scissors');
        document.getElementById('humanchoice').textContent = 'scissors';
    } else {
        resetGame();
    }
});

function playGame(HumanChoice) {
    let BotOutput = botOutput();
    gameLogic(BotOutput, HumanChoice);
}

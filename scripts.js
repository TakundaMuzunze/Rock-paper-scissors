const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const controlButtons = document.querySelector('.game-area');
const restartButton = document.getElementById('restart');
const displayedMessage = document.getElementById('winner-message');

let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('cpu-score');

const game = () => {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    restartButton.classList.remove('show-btn');
    controlButtons.classList.remove('hide-btns');
    displayedMessage.innerHTML = '';
};

const updateMessage = () => {
    if (playerScore.textContent === "5"){
        displayedMessage.innerHTML = "You were first to 5, you win the game!";
        controlButtons.classList.add('hide-btns');
        restartButton.classList.add('show-btn');
    }
    else if (computerScore.textContent === "5"){
        displayedMessage.innerHTML = "Computer was first to 5, you lost the game!";
        controlButtons.classList.add('hide-btns');
        restartButton.classList.add('show-btn');
    }
};

const updateResults = () => {
    if (playerChoice === computerChoice){
        displayedMessage.innerHTML = "It's a tie!";
    }
    else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')){
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        displayedMessage.innerHTML = "You chose " + playerChoice + ", you win!";
    }
    else if((playerChoice === 'rock' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'rock')){
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        displayedMessage.innerHTML = "You chose " + playerChoice + ", computer wins!";
    };
};

const generatedChoice = () =>{
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random () * choices.length);
    const cpuChoice = choices[randomChoice];
    return cpuChoice;
}

// Event listeners for each button
rockButton.addEventListener("click", function() {
    playerChoice = "rock";
    computerChoice = generatedChoice();
    updateResults();
    updateMessage();
});

paperButton.addEventListener("click", function() {
    playerChoice = "paper";
    computerChoice = generatedChoice();
    updateResults();
    updateMessage();
});

scissorsButton.addEventListener("click", function() {
    playerChoice = "scissors";
    computerChoice = generatedChoice();
    updateResults();
    updateMessage();
});

restartButton.addEventListener("click", function() {
    game();
});
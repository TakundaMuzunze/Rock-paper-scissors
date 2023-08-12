const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('cpu-score');

const game = () => {
    playerScore.textContent = 1;
    computerScore.textContent = 0;


};

const generatedChoice = () =>{
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random () * choices.length);
    const cpuChoice = choices[randomIndex];
    return cpuChoice;
}

// Event listeners for each button
// rockButton.addEventListener("click", function() {
//     const playerChoice = "rock";
//     const computerChoice = generatedChoice();
    
// });

// paperButton.addEventListener("click", function() {});

// scissorsButton.addEventListener("click", function() {});
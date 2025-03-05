let rockBtn = document.getElementById("Rock");
let paperBtn = document.getElementById("Paper");
let scissorsBtn = document.getElementById("Scissors");
let paraRes = document.getElementById("respara");

rockBtn.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    playGame('rock', computerChoice);
});

paperBtn.addEventListener('click', () => {
    let thecomputerChoice = getComputerChoice();
    playGame('paper', thecomputerChoice);
});

scissorsBtn.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    playGame('scissors', computerChoice);
});



function getComputerChoice(){
    let results = ["Rock", "Paper", "Scissors"];
    return results[Math.floor(Math.random() * results.length)]
}

let humanScore = 0;
let computerScore = 0;


function playGame(humanChoice, computerChoice){
    
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    let finalResult = "invalid";
    if(humanChoice === computerChoice){
        finalResult = "draw";
    } else if (humanChoice == "rock" && computerChoice == "paper" ||humanChoice == "paper" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "rock" ){
        finalResult = `You Lose! <br> ${computerChoice} beats ${humanChoice} `;
        computerScore += 1;
    } else if (computerChoice == "rock" && humanChoice == "paper" ||computerChoice == "paper" && humanChoice == "scissors" || computerChoice == "scissors" && humanChoice == "rock" ){
        finalResult = `You Win! <br> ${humanChoice} beats ${computerChoice} `;
        humanScore += 1
    } 

    paraRes.innerHTML = "";
    paraRes.innerHTML += "<br>" + finalResult;
    paraRes.innerHTML += "<br>" + " Human Score:" + humanScore;
    paraRes.innerHTML += "<br>" + " Computer Score:" + computerScore;
    paraRes.innerHTML += "<br>" 

    if (humanScore >= 5 ){
        paraRes.innerHTML += "<br>" + "You Win!!!";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore >= 5){
        paraRes.innerHTML += "<br>" + "You lost the game, good luck next time!";
        humanScore = 0;
        computerScore = 0;
    }
}
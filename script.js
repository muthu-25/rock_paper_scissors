function getComputerChoice(){
    let results = ["Rock", "Paper", "Scissors"];
    return results[Math.floor(Math.random() * results.length)]
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors?", "Rock");
    return choice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        let finalResult = "invalid";
        if(humanChoice === computerChoice){
            finalResult = "draw";
        } else if (humanChoice == "rock" && computerChoice == "paper" ||humanChoice == "paper" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "rock" ){
            finalResult = `You Lose! ${computerChoice} beats ${humanChoice} `;
            computerScore += 1;
        } else if (computerChoice == "rock" && humanChoice == "paper" ||computerChoice == "paper" && humanChoice == "scissors" || computerChoice == "scissors" && humanChoice == "rock" ){
            finalResult = `You Win! ${humanChoice} beats ${computerChoice} `;
            humanScore += 1
        } 

        console.log(finalResult);
        console.log("Human Score:" + humanScore);
        console.log("Computer Score:" + computerScore);
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
}
let humanScore = 0;
let computerScore = 0;


const getComputerChoice = function(){
    const choice = ["rock", "paper", "scissors"]; 
    const rng =  Math.floor(Math.random() * 3);
    return choice[rng];
}


const getHumanChoice = function(){
    const choice = prompt("rock, paper or scissors?");
    return choice.toLocaleLowerCase();
}


const playRound = function(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    
    if(humanChoice === computerChoice){
        console.log("It's a tie! Play again" + " | Score - You: " + humanScore + " | Computer: " + computerScore);
        return;
        
    }

    if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
        console.log("You win !");
        humanScore ++;
    }
    else{
        console.log("You lose! Try again.");
        computerScore ++;
    }

    console.log("Score - You: " + humanScore + " | Computer: " + computerScore);
}

const playGame = function(){
    for (let i = 1; i <= 5; i++) {
        console.log("Round" + i);
        playRound();
    }

    console.log("Game Over");

    if(humanScore > computerScore){
        console.log("You win!");
    }
    else if(computerScore > humanScore){
        console.log("You lose!");
    }
    else{
        console.log("Tie!")
    }

}

playGame();
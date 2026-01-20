let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

const yourScore = document.querySelector(".yourScore");
const cpuScore = document. querySelector(".cpuScore");

yourScore.textContent = humanScore;
cpuScore.textContent = computerScore;

const getComputerChoice = function(){
    const choice = ["rock", "paper", "scissors"]; 
    const rng =  Math.floor(Math.random() * 3);
    return choice[rng];
}


//Button human choice ---------------------------------
const btnRock = document.querySelector("button.btnRock");
const btnPaper = document.querySelector("button.btnPaper");
const btnScissors = document.querySelector("button.btnScissors");


btnRock.addEventListener("click", function(e) {
    playRound("rock");
})
btnPaper.addEventListener("click", function(e) {
    playRound("paper");
})
btnScissors.addEventListener("click", function(e) {
    playRound("scissors");
})


//Image Seletor------------------------------------
const humanImg = document.querySelector(".humanImage")
const cpuImg = document.querySelector(".cpuImage")

//------------------------------------------------------
const result = document.querySelector ("h1.result");

const round = document.querySelector("#round .roundPoint");
round.textContent = roundNumber;

const tie = document.querySelector("#tieRound p");

const newRound = document.querySelector(".nextRound")
newRound.style.visibility = "hidden";
humanImg.style.visibility = "hidden";
cpuImg.style.visibility = "hidden";



newRound.addEventListener("click", function(){
    humanImg.style.visibility = "hidden";
    cpuImg.style.visibility = "hidden";
    newRound.style.visibility = "hidden";

    btnPaper.style.visibility = "visible";
    btnRock.style.visibility = "visible";
    btnScissors.style.visibility = "visible";
    tie.textContent = "";

    humanImg.style.backgroundColor = "";
    cpuImg.style.backgroundColor = "";
})

//Restart-------------------------------------------
const restart = document.querySelector(".newGame");
restart.style.display = "none";

restart.addEventListener("click", function(){
    humanScore = 0;
    computerScore = 0;
    roundNumber = 1;

    round.textContent = roundNumber;
    yourScore.textContent = humanScore;
    cpuScore.textContent = computerScore;
    result.textContent = "";
    
    restart.style.display = "none";
    
    btnPaper.style.visibility = "visible";
    btnRock.style.visibility = "visible";
    btnScissors.style.visibility = "visible";

    
    humanImg.style.visibility = "hidden";
    cpuImg.style.visibility = "hidden";
    tie.textContent = "";
})



const playRound = function(humanChoice){
    let computerChoice = getComputerChoice();
    tie.textContent = "";
    restart.style.display = "none";

    humanImg.style.visibility = "visible";
    cpuImg.style.visibility = "visible";

    humanImg.setAttribute("src","./" + humanChoice + "Human.png");
    cpuImg.setAttribute("src","./" + computerChoice + "Cpu.png");

    btnPaper.style.visibility = "hidden";
    btnRock.style.visibility = "hidden";
    btnScissors.style.visibility = "hidden";

    if(humanChoice === computerChoice){
        roundNumber ++ ;
        round.textContent = roundNumber;
        tie.textContent = "Tie !"
        newRound.style.visibility = "visible";
        humanImg.style.borderColor = "#9CA3AF";
        humanImg.style.boxShadow = "0 4px 12px rgba(156, 163, 175, 0.3)";
        cpuImg.style.borderColor = "#9CA3AF";
        cpuImg.style.boxShadow = "0 4px 12px rgba(156, 163, 175, 0.3)";
        return;
        
    }

    if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){


        humanScore ++ ;
        yourScore.textContent = humanScore;
        roundNumber ++ ;
        round.textContent = roundNumber;
        tie.textContent = "Player wins";
        humanImg.style.backgroundColor = "#4ECDC4";
        humanImg.style.boxShadow = "0 4px 12px rgba(78, 205, 196, 0.4)";
        cpuImg.style.backgroundColor = "#FF6B6B";
        cpuImg.style.boxShadow = "0 4px 12px rgba(255, 107, 107, 0.4)"; 
    }
    else{
        computerScore ++;
        cpuScore.textContent = computerScore;
        roundNumber ++ ;
        round.textContent = roundNumber;
        tie.textContent = "Cpu wins";
        humanImg.style.backgroundColor = "#FF6B6B";
        humanImg.style.boxShadow = "0 4px 12px rgba(255, 107, 107, 0.4)";
        cpuImg.style.backgroundColor = "#4ECDC4";
        cpuImg.style.boxShadow = "0 4px 12px rgba(78, 205, 196, 0.4)"; 
    }

    newRound.style.visibility = "visible";

    if (humanScore === 5 || computerScore ===5){
        endGame();
        restart.style.display = "block";

    }
    
    

    }


    

    const endGame = function(){


    if (humanScore > computerScore) {
        result.textContent = "You WIN !!!";
        result.style.color = "#4ECDC4";
    } else{
        result.textContent = "You lose...";
        result.style.color = "#FF6B6B";        
    }

    btnPaper.style.visibility = "hidden";
    btnRock.style.visibility = "hidden";
    btnScissors.style.visibility = "hidden";
    
    newRound.style.visibility = "hidden";


    }

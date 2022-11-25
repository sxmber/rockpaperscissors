let playerPoints = 0;
let computerPoints = 0;

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber == 0) {
        return "rock";
    } else if (randomNumber == 1){
        return "paper";
    } else if (randomNumber == 2){
        return "scissors"
    }
    
}
const computerSelection = getComputerChoice();

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock" && computerSelection == "rock"){
        return "Its a draw";
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        return "Computer wins"
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "Player wins"
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return "Player wins"
    } else if (playerSelection == "paper" && computerSelection == "paper"){
        return "Its a draw"
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "Computer wins"
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "Computer wins"
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "Player wins"
    } else if (playerSelection == "scissors" && computerSelection == "scissors"){
        return "Its a draw"
    }

}

const game = () => {
    for (i=0; i < 5; i++){
        const playerSelection = prompt("Do you pick rock, paper or scissors?");
        let result = playRound(playerSelection, computerSelection);
        console.log(result)
        if (result == "Player wins"){
            playerPoints++;
            console.log("you won")
        } else if (result == "Computer wins"){
            computerPoints++;
            console.log("Computer won")
        } else if (result == "Its a draw"){
            console.log("Its a draw, play again")
        }

    }
    // if(playerPoints > computerPoints) {
    //     return "Player won the game"
    // } else if (playerPoints < computerPoints){
    //     return "Computer won the game"
    // } else {
    //     return "Its a draw"
    // }
}
game();
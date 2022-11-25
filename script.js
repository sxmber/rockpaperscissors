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
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Do you pick rock, paper or scissors?");
        let result = playRound(playerSelection, computerSelection);
        if (result == "Player wins"){
            playerPoints++;
            console.log(`You chose ${playerSelection} and computer chose ${computerSelection}, You won!`)
        } else if (result == "Computer wins"){
            computerPoints++;
            console.log(`You chose ${playerSelection} and computer chose ${computerSelection}, You lost...`)
        } else if (result == "Its a draw"){
            console.log(`You chose ${playerSelection} and computer chose ${computerSelection}, Its a draw!`)
        }

    }
    if(playerPoints > computerPoints) {
        console.log( "Player won the game")
    } else if (playerPoints < computerPoints){
        console.log("Computer won the game")
    } else {
        console.log("Game ended. Its a draw")
    }
}
game();
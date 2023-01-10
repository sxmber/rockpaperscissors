let playerPoints = 0;
let computerPoints = 0;

const pPoints = document.querySelector('#pPoints');
const cPoints = document.querySelector('#cPoints');
const options = document.querySelectorAll('.options')
const p = document.querySelector('p');
const p1 = document.querySelector('p1')
const reset = document.querySelector('#reset');

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber == 0) {
        return "rock";
    } else if (randomNumber == 1) {
        return "paper";
    } else if (randomNumber == 2) {
        return "scissors"
    }

}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "Its a draw"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "Computer wins"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "Player wins"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "Player wins"
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "Its a draw"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "Computer wins"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "Computer wins"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Player wins"
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "Its a draw"
    }


}

const game = () => {
    options.forEach((option) => {
        option.addEventListener('click', function (e) {
            let comp = getComputerChoice();
            result = playRound(e.target.id, comp);
            if (result == "Player wins") {
                playerPoints++;
                pPoints.textContent = playerPoints.toString();
                p.textContent = `You chose ${e.target.id} and computer chose ${comp}`;
                p1.textContent = "You won!";
            } else if (result == "Computer wins") {
                computerPoints++;
                cPoints.textContent = computerPoints.toString();
                p.textContent = `You chose ${e.target.id} and computer chose ${comp}`;
                p1.textContent = "You lost...";
            } else if (result == "Its a draw") {
                p.textContent = `You chose ${e.target.id} and computer chose ${comp}`;
                p1.textContent = "Its a draw!";
            }
            if (playerPoints == 5) {
                p1.textContent = "You win the game!";
                document.getElementsByClassName("options").disabled = true;
            }
            else if (computerPoints == 5) {
                p1.textContent = "You lost the game :(";
                document.getElementsByClassName("options").disabled = true;
            }

        })
    })
    reset.addEventListener('click', resetGame)

}
function resetGame() {
    playerPoints = 0;
    pPoints.textContent = 0;
    computerPoints = 0;
    cPoints.textContent = 0;
    // p.textContent = "";

}

game();
//i want it to display you won or lost, then on 
//next button press it restarts the game
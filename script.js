let playerPoints = 0;
let computerPoints = 0;

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
    const pPoints = document.querySelector('#pPoints');
    const cPoints = document.querySelector('#cPoints');
    const options = document.querySelectorAll('.options')
    const p = document.querySelector('p');
    const reset = document.querySelector('#reset');
    options.forEach((option) => {
        option.addEventListener('click', function (e) {
            let comp = getComputerChoice();
            result = playRound(e.target.id, comp);
            if (result == "Player wins") {
                playerPoints++;
                pPoints.textContent = playerPoints.toString();
                p.textContent = `You chose ${e.target.id} and computer chose ${comp}, You won!`;
            } else if (result == "Computer wins") {
                computerPoints++;
                cPoints.textContent = computerPoints.toString();
                p.textContent = `You chose ${e.target.id} and computer chose ${comp}, You lost...`;
            } else if (result == "Its a draw") {
                p.textContent = `You chose ${e.target.id} and computer chose ${comp}, Its a draw!`;
            }
            if (playerPoints == 5) {
                p.textContent = "You win!";
            }
            else if (computerPoints == 5) {
                p.textContent = "You lost!";
            }

        })
    })
    reset.addEventListener('click', () => {
        playerPoints = 0;
        pPoints.textContent = 0;
        computerPoints = 0;
        cPoints.textContent = 0;
        p.textContent = "";
    })

}


game();
function playRound(playerSelection, computerSelection) {
    switch(playerSelection.toLowerCase())
    {
        case "rock":
            switch(computerSelection)
            {
                case "rock":
                    console.log("ROCK VS ROCK! TIE!")
                    return "tie";    
                ;
                case "paper":
                    console.log("ROCK VS PAPER! YOU LOSE!")
                    return "you lose";    
                ;
                case "scissors":
                    console.log("ROCK VS SCISSORS! YOU WIN!")
                    return "you win";
                ;
            }
            ;
        case "paper":
            switch(computerSelection)
            {
                case "rock":
                    console.log("PAPER VS ROCK! YOU WIN!")
                    return "you win";
                    ;
                case "paper":
                    console.log("PAPER VS PAPER! TIE!")
                    return "tie";
                    ;
                case "scissors":
                    console.log("PAPER VS SCISSORS! YOU LOSE!")
                    return "you lose";
                    ;
            };
        case "scissor":
            switch(computerSelection)
            {
                case "rock":
                    console.log("SCISSORS VS ROCK! YOU LOSE!")
                    return "you lose";
                case "paper":
                    console.log("SCISSORS VS PAPER! YOU WIN!")
                    return "you win";
                case "scissors":
                    console.log("SCISSORS VS SCISSORS! TIE!")
                    return "tie";
            };
        default:
            //Error check
            alert("Wrong Input, Input Must be either 'Rock' / 'Paper' / 'Scissors'")
            break;
    }
}

//Choose what computer players
function computerPlay()
{    
    const computerCanPlay = ["rock","paper","scissors"]
    return computerCanPlay[Math.floor(Math.random()*computerCanPlay.length)]
}

// gamWtihWinner Detects if 5 games have a winner
// It will only iterates if someone won
function game()
{
    let gameWithWinner = 0;
    let gameWonByPlayer = 0;
    do
    {
        let playerSelection=window.prompt("Enter Rock,Paper, or Scissors","Rock");
        let computerSelection = computerPlay();
        //check if win is obtained by player or the pc
        switch(playRound(playerSelection,computerSelection)){
            case "you win":
                gameWithWinner++;
                gameWonByPlayer++;
                break;
            case "you lose":
                gameWithWinner++;
                break;
            case "tie":
                break;
            ;
        }
    }
    while(gameWithWinner<5)
        
    if(gameWithWinner - gameWonByPlayer < gameWonByPlayer)
    {
        console.log("You have won: " + gameWonByPlayer + " out of: " + gameWithWinner + "Games! YOU WIN!")
    }
    else
    {
        console.log("You have won: " + gameWonByPlayer + "out of: " + gameWithWinner + "Games! YOU LOSE!")
    }
}
game()


// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));
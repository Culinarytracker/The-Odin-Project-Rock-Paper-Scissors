function computerPlay() {
  
   switch (Math.floor(Math.random()*3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
   }
}

let capFirst = (input) => (input.charAt(0).toUpperCase() + input.substr(1).toLowerCase());

let checkPlayerSelection = (a) => ((a=="rock")||(a=="paper")||(a=="scissors"));

function getPlayerSelection() {
    let playerSelection = prompt('Choose "Rock", "Paper" or "Scissors":').trim();
    while (!checkPlayerSelection(playerSelection.toLowerCase())) {
        playerSelection = prompt('Invalid Answer. Please Choose "Rock", "Paper" or "Scissors":').trim();
    }
    return capFirst(playerSelection);
}

let checkForTie = (computerSelection, playerSelection) => (computerSelection == playerSelection);

function checkPlayerWin(computerSelection, playerSelection) {
    if (computerSelection=="Rock") {
        return (playerSelection=="Paper");
    } else if (computerSelection=="Paper") {
        return (playerSelection=="Scissors");
    } else if (computerSelection=="Scissors") {
        return (playerSelection=="Rock");
    }
}

function game(a) {
    let score = [0, 0];
    let gamesPlayed = 0;
    let player;
    let computer;

    for (let i=0; i<a; i++){
        player = getPlayerSelection();
        computer = computerPlay();
        gamesPlayed++;
        if (checkForTie(computer, player)) {
            console.log(`Tie Game! Both you and the computer chose ${player}.\nCurrent Score after ${gamesPlayed} games:\nPlayer:  ${score[0]}\nComputer: ${score[1]}`);
        }else if (checkPlayerWin(computer, player)) {
            score[0]++;
            console.log(`${player} beats ${computer}! Player Wins!\nCurrent Score after ${gamesPlayed} games:\nPlayer:  ${score[0]}\nComputer: ${score[1]}`)
        }else {
            score[1]++;
            console.log(`${computer} beats ${player}! Computer Wins!\nCurrent Score after ${gamesPlayed} games:\nPlayer:  ${score[0]}\nComputer: ${score[1]}`)
        }
    
    }
}

game(5);

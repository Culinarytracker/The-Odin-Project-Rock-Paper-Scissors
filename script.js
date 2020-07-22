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

let checkPlayerSelection = (x) => ((x=="rock")||(x=="paper")||(x=="scissors"));

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

function playRound() {
    player = getPlayerSelection();
    computer = computerPlay();
    if (checkForTie(computer, player)) {
        console.log(`\nTie Game! Both you and the computer chose ${player}.`);
        return 1;
    }else if (checkPlayerWin(computer, player)) {
        console.log(`\n${player} beats ${computer}! You Win!`);
        return 2;
    }else {
        console.log(`\n${computer} beats ${player}! Computer Wins!`);
        return 3;
    }
}

function sanitizeNumber(n) {
    if (!isNaN(n.trim()) && n.trim()%1==0) {
        return n;
    }else {
        return sanitizeNumber(prompt("That's not a valid number. How many rounds do you want to play?"));
    }
}

function game(numOfRounds) {
    let score = [0, 0];
    let gamesPlayed = 0;
    let player;
    let computer;
    let currentRound;
    for (let i=0; i<numOfRounds; i++){
        gamesPlayed++;
        currentRound=playRound();
        if (currentRound==1) {
            console.log(`\nScore after ${gamesPlayed} games:\nYou:  ${score[0]}\nComputer: ${score[1]}`);
        }else if (currentRound==2) {
            score[0]++;
            console.log(`\nScore after ${gamesPlayed} games:\nYou:  ${score[0]}\nComputer: ${score[1]}`);
        }else {
            score[1]++;
            console.log(`\nScore after ${gamesPlayed} games:\nYou:  ${score[0]}\nComputer: ${score[1]}`);
        }
    }
    if (score[0]>score[1]) {
        console.log(`\nCongratulations to You! After ${gamesPlayed} rounds you beat the computer ${score[0]} to ${score[1]}.`);
    }else if (score[0]<score[1]) {
        console.log(`\nComputer Wins! After ${gamesPlayed} rounds you were beat ${score[0]} to ${score[1]}.`);
    }else {
        console.log(`\nIt ends in a tie! After ${gamesPlayed} rounds it was tied at ${score[0]}.`);
    }
}

game(sanitizeNumber(prompt('How many rounds would you like to play?')));

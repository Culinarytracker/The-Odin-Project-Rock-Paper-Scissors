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


const rock = document.querySelector('#buttons_container').children[0];
const paper = document.querySelector('#buttons_container').children[1];
const scissors = document.querySelector('#buttons_container').children[2];
const nameSubmitButton = document.querySelector('#name_submit');
const result = document.querySelector('#result').lastElementChild;
const currentRound = document.querySelector('#current_round');
const playerScore = document.querySelector('#playerScore').lastElementChild;
const compScore = document.querySelector('#compScore').lastElementChild;
const resetButton = document.querySelector('#reset').firstElementChild;

nameSubmitButton.addEventListener('click', function() {
    document.querySelector('#playerScore').firstElementChild.textContent = document.querySelector('#player_name').value;
    document.querySelector('#name_wrapper').classList.add('hidden');
    document.querySelector('#game_wrapper').classList.remove('hidden');
});

rock.addEventListener('click', () => playRound('Rock'));
paper.addEventListener('click', () => playRound('Paper'));
scissors.addEventListener('click', () => playRound('Scissors'));
resetButton.addEventListener('click', function(){
     playerScore.textContent=0;
     compScore.textContent=0;
     currentRound.textContent=1;
     result.textContent='Good Luck!';
     document.querySelector('#reset').classList.add('hidden');     
     document.querySelector('#buttons_container').classList.remove('hidden');

});





function checkForTie(computerSelection, playerSelection){ 
    return (computerSelection == playerSelection);
}

function checkPlayerWin(computerSelection, playerSelection) {
    if (computerSelection=="Rock") {
        return (playerSelection=="Paper");
    } else if (computerSelection=="Paper") {
        return (playerSelection=="Scissors");
    } else if (computerSelection=="Scissors") {
        return (playerSelection=="Rock");
    }
}

function playRound(player) {

    
    computer = computerPlay();
    if (checkForTie(computer, player)) {
        result.textContent=(`Tie Game! Both you and the computer chose ${player}.`);
        
    }else if (checkPlayerWin(computer, player)) {
        result.textContent=(`\n${player} beats ${computer}! You Win!`);
        playerScore.textContent=Number(playerScore.textContent)+1;
    }else {
        result.textContent=(`\n${computer} beats ${player}! Computer Wins!`);
        compScore.textContent=Number(compScore.textContent)+1;
    }
    currentRound.textContent=Number(currentRound.textContent)+1;
    if (playerScore.textContent >= 5 || compScore.textContent >= 5) {
        document.querySelector('#buttons_container').classList.add('hidden');
        if (playerScore.textContent >= 5) {
            result.textContent=(`Congratulations, ${document.querySelector('#player_name').value} wins!`);
        }else {
            result.textContent=(`The Computer Won This Time. Better Luck Next Time`);
        }
        document.querySelector('#reset').classList.remove("hidden");
    }
}


// const rock = document.querySelector('#rock');
// const paper = document.querySelector('#paper');
// const scissors = document.querySelector('scissors');

// rock.addEventListener('click', game);
// paper.addEventListener('click', game);
// scissors.addEventListener('click', game);

let wins = 0;
const buttons = document.querySelectorAll('button');
const scoreDisplay = document.querySelector("#scoreDisplay");
const computerSelectionDisplay = document.querySelector("#computerSelection");


console.log(buttons);

buttons.forEach((button) => {

  button.addEventListener('click', () => {
    console.log(button.id);
    game(button.id);
    button.classList.add('playing');
  });
});

buttons.forEach(button => {

  button.addEventListener('transitionend', removeTransition)
});

function removeTransition(e){
  console.log(e);
  if(e.propertyName != 'transform') return;

  this.classList.remove('playing');
}



function computerPlay() {
  const arr = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * (3 - 0) + 0);
  console.log(arr[choice]);
  return arr[choice];
}

function playRound(computerSelection, playerSelection) {
  switch (computerSelection) {
    case "rock":
      if (playerSelection == "rock") {
        console.log("You tie!");
        return "You tie!";
      } else if (playerSelection == "paper") {
        console.log("You win!");
        return "You win!";
      } else if (playerSelection == "scissors") {
        console.log("You lose!");
        return "You lose!";
      } else {
        console.log("invalid user entry!")
        return "You fucked up!"
      }
    case "paper":
      if (playerSelection == "rock") {
        console.log("You lose!");
        return "You lose!";
      } else if (playerSelection == "paper") {
        console.log("You tie!");
        return "You tie!";
      } else if (playerSelection == "scissors") {
        console.log("You win!");
        return "You win!";
      } else {
        console.log("invalid user entry!")
        return "You fucked up!"
      }
    case "scissors":
      if (playerSelection == "rock") {
        console.log("You win!");
        return "You win!";
      } else if (playerSelection == "paper") {
        console.log("You lose!");
        return "You lose!";
      } else if (playerSelection == "scissors") {
        console.log("You tie!");
        return "You tie!";
      } else {
        console.log("invalid user entry!")
        return "You fucked up!"
      }
    default:
      console.log("invalid user entry!")
      return "You fucked up!"
  }

}


// console.log(playRound(computerSelection, playerSelection));


function game(playerSelection) {
  scoreDisplay.textContent = `You have won ${wins} games.`;
  

  const computerSelection = computerPlay();
  computerSelectionDisplay.textContent = `Computer selected ${computerSelection}`;
  const winOrLose = playRound(computerSelection, playerSelection);
  if (winOrLose == "You win!") {
    console.log(wins);
    wins++;
    

  }

  // console.log(playRound(computerSelection, playerSelection));



  if (wins >= 3) {
    console.log(`You won ${wins} games, the majority, nice job!`)
  } else {
    console.log("Better luck next time!")
  }


}


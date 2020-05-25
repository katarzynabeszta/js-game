let ButtonName, buttonRock, buttonPaper, buttonScissors;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

// fuction for buttons click

function buttonClicked(ButtonName) {
  clearMessages();
  console.log(ButtonName + ' has been clicked');
  
let MoveId, PlayerMove, ComputerMove, computerMove, playerMove, randomNumber, playerInput;

//Computer and player choice

function getMoveName(MoveId) {
  console.log('drawn number is: ' + MoveId);
  if (MoveId == 1) {
    return 'rock';
  } else if (MoveId == 2) {
      return 'paper';
  } else if (MoveId == 3) {
      return 'scissors';
  } else {
    printMessage('unknown move: ' + MoveId + '. I believe that you mentioned "rock".');
    return 'rock';
  }
}

//Results of the game

function displayResult(PlayerMove, ComputerMove) {
  console.log('called function displayResults with arguments: ' + PlayerMove + ', ' + ComputerMove);
  if (PlayerMove == 'paper' && ComputerMove == 'rock') {
    printMessage('You are the winner!');
  } else if (PlayerMove == 'rock' && ComputerMove == 'scissors') {
      printMessage('You are the winner!');
  } else if (PlayerMove == 'scissors' && ComputerMove == 'paper') {
      printMessage('You are the winner!');
  } else if (PlayerMove == ComputerMove) {
      printMessage('Tie!');
  } else {
    printMessage('Lose :(');
  }
  printMessage('I played ' + ComputerMove + ' and you played ' + PlayerMove + '.');
}
playerMove = ButtonName;
console.log('player move is: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('drawn number is: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('computer move is: ' + computerMove);
displayResult(playerMove, computerMove);
}


buttonRock.addEventListener('click', function(){ 
    buttonClicked('rock')
});
buttonPaper.addEventListener('click', function(){ 
    buttonClicked('paper')
});
buttonScissors.addEventListener('click', function(){ 
    buttonClicked('scissors')
});




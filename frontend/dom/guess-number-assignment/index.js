let newGameBtn = document.getElementsByClassName('new-game')[0].addEventListener('click', resetGame);
let randomNumber = Math.floor(Math.random() * 10) + 1;
let message = document.getElementsByClassName('message')[0];
let displayScore = document.getElementsByClassName('score')[0];
let input = document.getElementsByClassName('input')[0];
let checkBtn = document.getElementsByClassName('check')[0].addEventListener('click', checkNumber);

let score = 10;


function displayMessage(msg) {
  // TODO: answer here
  message.innerHTML = msg;
  displayScore.innerHTML = score;
}

function resetGame() {
  // TODO: answer here
  score = 10;
  input.value = '';
  document.getElementsByClassName('number')[0].innerHTML = '?';
  randomNumber = Math.floor(Math.random() * 10) + 1;
  displayMessage('Lets start guessing...');
  //dilarang menghapus code dibawah ini!
  document.getElementById('hidden-number').innerHTML = randomNumber
}

function checkNumber() {
  // TODO: answer here
  let i = parseInt(input.value);

  if (score === 0) {
    displayMessage('Oops, you lost the game');
  }
  else if (i === randomNumber) {
    document.getElementsByClassName('number')[0].innerHTML = randomNumber;
    displayMessage('Yeay! you guessed it');
  }
  else if (i < 1 || i > 10) {
    displayMessage('Guess any number between 1 and 10');
    score -= 1;
  }
  else if (i > randomNumber) {
    displayMessage('Oww... thats too big!');
    score -= 1;
  }
  else if (i < randomNumber) {
    displayMessage('Too small, buddy!');
    score -= 1;
  }
  
}

//dilarang menghapus code dibawah ini!
document.getElementById('hidden-number').innerHTML = randomNumber
/*
-Player must guess a number between a min and max
-Player gets acertain amount of guesses
-Notify player of guesses remaining
-Notify the player of the correct answer if loose
-let player choose to play again
*/
//game value
let min =1,
  max =10,
  winningNum = getRandomNum(min, max),
  guessesLeft =3;

  //UL Element
  const game = document.getElementById('game');
  const minNum = document.querySelector('.min-num');
  const maxNum = document.querySelector('.max-num');
  const guessBtn = document.querySelector('#guess-btn');
   const guessInput = document.querySelector('#guess-input');
  const message = document.querySelector('.message');

  //assign UI min amd max

  minNum.textContent = min;
  maxNum.textContent = max;

  // Play again event listner
  game.addEventListener('mousedown', function(e){
    if(e.target.className === "play-again"){
     window.location.reload(); 
    }
  })
  //listen for guess
  guessBtn.addEventListener('click', function(){
   let guess = parseInt( guessInput.value);
   console.log(guess);

   //validate
   if(isNaN(guess) || guess < min || guess > max){
      setMessage(`Please enter a number between ${min} and ${max}`, 'red')
   }
   //check if won
   if(guess === winningNum){
    // // disable input
    // guessInput.disabled = true;

    // //change border color
    // guessInput.style.borderColor = 'green';
    // //set message
    // setMessage(`${winningNum} is correct!, YOU WIN`, 'green');
    gameOver(true, `${winningNum} is corrrect, YOU WIN`);
   }else{
    //wrong number
    guessesLeft-= 1;
    if(guessesLeft === 0){
    //   // game over lost
    //     // disable input
    // guessInput.disabled = true;

    // //change border color
    // guessInput.style.borderColor = 'red';
    // //set message
    // setMessage(`Game over you lost, the correct number was ${winningNum}`, 'red');
    gameOver(false, `GAME OVER, you lost. the correct number was ${winningNum}`);
    }else{
      //game continues - anwer wrong
      //change border color
      guessInput.style.borderColor = 'red';

      //clear input
      guessInput.value = '';
      //tell user its the wrng number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red'); 
    }
   }
  });
//game over
function gameOver(won, msg){
   let color;
   won === true? color = 'green' : color = 'red';


    //disable input
    guessInput.disabled = true;
   //change border color 
   guessInput.style.borderColor =color;
   //set text color
   message.style.color = color;
   // set message
   setMessage(msg)

   //play again
    guessBtn.value ="Play again"; 
    guessBtn.className += 'play-again';

}
//get winnging number
function getRandomNum(min,max){
 return Math.floor( Math.random()* (max-min+1)+min);
}
  function setMessage(msg, color){
    message.style.color = color;
     message.textContent = msg;
  }
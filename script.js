'use strict';

// console.log(document.querySelector(".message").textContent = "Correct Number!");
//
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;
//
// document.querySelector('.guess').value =23; //dodjela vrijednosti (value)


let secretNumber = Math.trunc(Math.random()*20)+1;

let score=20;

let highScore =0;

const displayMessage = function(message){
  document.querySelector('.message').textContent=message;
}


document.querySelector('.check').addEventListener("click", function(){
const guess = Number(document.querySelector('.guess').value);

  if (!guess){
    displayMessage('✋ Morate unijeti broj!');
  }
    else if (secretNumber === guess) {
      displayMessage('Tacan broj! 🎊');
      // document.querySelector('.message').textContent = "Correct Number!";
      document.querySelector('body').style.backgroundColor = "#60b347";
      document.querySelector('.number').style.width = "25rem";
      document.querySelector('.number').textContent = secretNumber;

      if(score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

    }

    else if (guess !== secretNumber) {

      if(score>1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? "Too high! 📈" :
      // "Too low!";

      displayMessage( guess > secretNumber ? "Too high! 📈" :
      "Too low!");
      score--;
      document.querySelector('.score').textContent=score;
      document.querySelector('body').style.backgroundColor = "red";

    } else {
        // document.querySelector('.message').textContent="You lost the game!";
        displayMessage('Izgubio si!');
        document.querySelector('.score').textContent=0;
      }
    }
  })

    // else if(guess>secretNumber) {
    //
    //   if(score>1) {
    //   document.querySelector('.message').textContent = "Too high! 📈";
    //   score--;
    //   document.querySelector('.score').textContent=score;
    //   document.querySelector('body').style.backgroundColor = "red";
    //
    // } else {
    //     document.querySelector('.message').textContent="You lost the game!";
    //     document.querySelector('.score').textContent=0;
    //
    //
    //
    //   }
    // }

//     else if (guess<secretNumber) {
//       if(score>1) {
//       document.querySelector('.message').textContent = "Too low! 📈";
//       score--;
//       document.querySelector('.score').textContent=score;
//       document.querySelector('body').style.backgroundColor = "red";
//
//     } else {
//         document.querySelector('.message').textContent="You lost the game!";
//         document.querySelector('.score').textContent=0;
//
//       }
//     }
// })
//


document.querySelector('.again').addEventListener("click",function(){
  score = 20;
  secretNumber=Math.trunc(Math.random()*20)+1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';

document.querySelector('.number').textContent = "?";
// document.querySelector('.message').textContent = "Start guessing!";
displayMessage('Start guessing!');
document.querySelector('.guess').value = '';


})

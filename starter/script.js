'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber)

let score = 20;
console.log(score)
let highscore = 0;


//Again buttom
document.querySelector('.again').addEventListener('click',function(){
    score =20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent ="Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor ="#222";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";

})

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    // when player not put proper input
    if (!guess){
        document.querySelector('.message').textContent ="🚫 Number is written!!";
    // When player WINS
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent =" 🏆 Winner";
        document.querySelector('body').style.backgroundColor ="#57be49";
        document.querySelector('.number').style.width  ="30rem";
        // secret number
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    // When player Type higher number
     else if (guess > secretNumber){
        if(score > 0){
        document.querySelector('.message').textContent =" Too 👆 high";
        score--;
        document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent =" YOU LOSS THE GAME"; 
        }
    // When player Type Lower  number

    } else if (guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent =" Too 👇 low"
            score--;
            document.querySelector('.score').textContent = score;
            } else{
                document.querySelector('.message').textContent =" YOU LOSS THE GAME"; 
            }

    };
}); 
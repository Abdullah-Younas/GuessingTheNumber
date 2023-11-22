let creatorText = document.getElementById("CreatorMsg");
const minNum = 1;
const maxNum = 100;
const RanNum = Math.floor(Math.random() * maxNum) + minNum;

let UserNum;
let Guesses = 0;
let gameRunning = true;

document.getElementById("submitbtn").onclick = function(){       
    UserNum = document.getElementById("Guesstxt").value;
    UserNum = Number(UserNum);
    
    if(isNaN(UserNum)){
        creatorText.textContent = "Please enter a Valid Number"
    }
    else if(UserNum < 1 || UserNum > 100){
        creatorText.textContent = "Please enter a Valid Number"
    }
    else{
        Guesses++;
        if(UserNum < RanNum){
             creatorText.textContent = "TOO LOW! TRY AGAIN!"
        }
        else if(UserNum > RanNum){
         creatorText.textContent = "TOO HIGH! TRY AGAIN!"
        }
        else{
            creatorText.textContent = `Your Guess is Correct!! It took you ${Guesses} Guesses`
            gameRunning = false;
        }
    }
}
document.getElementById("retrybtn").onclick = function(){
    location.reload();
    gameRunning = true;
}


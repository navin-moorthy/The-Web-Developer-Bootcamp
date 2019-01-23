var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var maxPoints = document.querySelector("input");
var maxPointsDisplay = document.querySelector("#maxDisplay");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore;

maxPoints.addEventListener("change",function(){   
    maxPointsDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();    
});

p1Button.addEventListener("click",function(){
    if(!gameOver){
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.toggle("winner");
            gameOver = true;
        }
    }
    p1Display.textContent = p1Score;
});

p2Button.addEventListener("click",function(){
    if(!gameOver){
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.toggle("winner");
            gameOver = true;
        }
    }
    p2Display.textContent = p2Score;
});

resetButton.addEventListener("click",function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}


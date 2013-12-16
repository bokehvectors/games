(function(global) {
  
    //Games variables
    var alienX = 80;
    var alienY = 20;
    var guessX = 0;
    var guessY = 0;
    var shotsRemaining = 8;
    var shotsMade = 0;
    var gameState = "";
    var gameWon = false;

    //The games object
    var cannon = document.querySelector("#cannon");
    var alien = document.querySelector("#alien");
    var missile = document.querySelector("#missile");
    
    //The var input and output
    var inputX = document.querySelector("#inputX");
    var inputY = document.querySelector("#inputY");
    var output = document.querySelector("#output");
    
    //The button
    var button = document.querySelector("button");
    button.style.cursor = "pointer";
    button.addEventListener("click", clickHandler, false);
    
    function render(){
        //Position Alien
        alien.style.left = alienX+"px";
        alien.style.top = alienY+"px";
        
        //Position cannon
        cannon.style.left = guessX+"px";
        
        //possition missile
        missile.style.left = guessX+"px";
        missile.style.top = guessY+"px";
    }
    
    function clickHandler(){
        playGame();
    }
    
    function playGame(){
        shotsRemaining = --shotsRemaining;
        shotsMade = ++shotsMade;
        gameState = " Shots: "+shotsMade+", remaining: "+shotsRemaining;
        
        guessX = parseInt(inputX.value);
        guessY = parseInt(inputY.value);
        
        //Find if the alien is hited
        if(guessX >= alienX && guessX <= alienX+20){
            if(guessY >= alienY && guessY <= alienY+20){
                gameWon = true;
                gameEnd();
            }
        }else{
            output.innerHTML = "Miss! "+gameState;
            
            if (shotsRemaining < 1){
                gameEnd();
            }
        }
        
        if(!gameWon){
            alienX = Math.floor(Math.random()*280);
            alienY += 30;
        }
        
        render();
    }
    
    function gameEnd(){
        console.log(gameWon);
        if(gameWon){
            output.innerHTML = "Yo have won"+"<br>"+"You have used: "+shotsMade+" shots";
        } else {
            output.innerHTML = "You have lost";
        }
    }
        
})(this);
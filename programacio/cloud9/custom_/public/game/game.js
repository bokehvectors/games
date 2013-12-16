(function(global) {
    
    //Game variables
    var mysteryNumber = 50;
    var playersGuess = 0;
    
    //The input and output fields
    var input = document.querySelector("#input");
    var output = document.querySelector("#output");

    //The button
    var button = document.querySelector("button");
    button.style.cursor = "pointer";
    button.addEventListener("click", clickHandler,false);

    function clickHandler()
    {
        playGame();
    }

    function playGame()
    {
        playersGuess = parseInt(input.value);
    
        if(playersGuess > mysteryNumber)
        {
            output.innerHTML = "That's too high.";
        }
        else if(playersGuess < mysteryNumber)
        {
            output.innerHTML = "That's too low.";
        }
        else if(playersGuess === mysteryNumber)
        {
            output.innerHTML = "You got it!";
        }
    }
})(this);
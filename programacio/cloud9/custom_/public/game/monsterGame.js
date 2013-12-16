(function(global) {

    var monster = {
        image: "images/monsters.png",
        NORMAL: 0,
        SCARED: 1,
        state: 0
    };

    var canvas = document.querySelector("canvas");
    var drawingSurface = canvas.getContext("2d");

    var monsterImage = new Image();
    monsterImage.addEventListener("load",render, false);
    monsterImage.src = monster.image;

    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup", keyupHandler, false);

    function keydownHandler() 
    {
       monster.state= monster.SCARED;
       render();
       console.log(monster.state);
    }

    function keyupHandler() 
    {
       monster.state= monster.NORMAL;
       render();
    }

    function render()
    {
      drawingSurface.drawImage(
        monsterImage, 
        monster.state*64, 0, 64, 64,
        0, 0, 64, 64
      );
    }
 
})(this);
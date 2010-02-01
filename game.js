/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var gameState = 0;
var gameCanvas;
var gameField;

/*
 * UP = 1
 * RIGHT = 2
 * DOWN = 3
 * LEFT = 4
 */
var gameDirection = 2;

function initGame(canvasId) {
    gameCanvas = document.getElementById(canvasId);
    var graphics2d = gameCanvas.getContext("2d");

    // Draw Canvas
    graphics2d.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    graphics2d.fillStyle = "#CCC";
    graphics2d.fillRect(5, 5, gameCanvas.width - 10, gameCanvas.height - 10);
    graphics2d.fillStyle = "#FFF";
    graphics2d.fillRect(10, 10, gameCanvas.width - 20, gameCanvas.height - 20);

    // Init Game field
    var fieldX = ((gameCanvas.width-20) / 10);
    var fieldY = ((gameCanvas.height-20) / 10);

    gameField = new Array(fieldY);
    for(i = 0; i < fieldY; i++) {
        gameField[i] = new Array(fieldX);
    }

    gameField[0][0] = "x";
    gameField[1][1] = "x";
    gameField[2][2] = "x";
}

function registerControls() {
    Event.observe(document, 'keypress', handleKeyEvent);
}

function handleKeyEvent(event) {
    if(event.keyCode == Event.KEY_LEFT) {
        // Move left
        gameDirection = 4;
    }
    else if(event.keyCode == Event.KEY_RIGHT) {
        gameDirection = 2;
    }
    else if(event.keyCode == Event.KEY_DOWN) {
        gameDirection = 3;
    }
    else if(event.keyCode == Event.KEY_UP) {
        gameDirection = 1;
    }
    else if(event.keyCode == Event.KEY_RETURN) {
        // Game is not running, start it..
        if(gameState == 0) {            
            startGame();
        }
    }
    else if(event.keyCode == Event.KEY_ESC) {        
        stopGame();
        initCanvas();
    }
}

function startGame() {
    var context = gameCanvas.getContext("2d");
    context.font = "bold 12px sans-serif";
    context.fillStyle = "#000";
    context.fillText("Game started!!11elf", 100, 100);

    gameState = 1;

    drawField();
}

function stopGame() {
    // Set game state to stop the game loop
    gameState = 0;
}

function drawField() {
    var context = gameCanvas.getContext("2d");
    context.fillStyle = "#FFF";
    context.fillRect(10, 10, gameCanvas.width-20, gameCanvas.height-20);

    context.fillStyle = "#000";

    for(y = 0; y < gameField.length; y++) {
        for(x = 0; x < gameField[y].length; x++) {
            if(gameField[y][x] == "x") {
                var posX = (x*10)+10;
                var posY = (y*10)+10;

                context.fillRect(posX, posY, 10, 10);
            }
        }
    }
}


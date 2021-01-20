
function playGame() {
    let playerImage = new Image();
    playerImage.src = "img/char_sprite.png";
    let player = new Player(playerImage,100,100);
    let canvasGame=new CanvasGame();
    gameObjects.push(player)
    canvasGame.start()
}


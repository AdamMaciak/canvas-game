class CanvasGame {
    constructor() {

    }

    start() {
        console.log('startCanvasGame');
        for (let i = 0; i < gameObjects.length; i++) {
            gameObjects[i].start();
        }
    }

    playGameLoop() {
        this.collisionDetection();
        this.render();
        requestAnimationFrame(this.playGameLoop.bind(this));
    }

    render() {
        /* clear previous rendering from the canvas */
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        /* render game gameObjects on the canvas */
        for (let i = 0; i < gameObjects.length; i++) {
            /* Use an empty gameObject to ensure that there are no empty entries in the gameObjects[] array */
            /* This is needed because an empty entry in the gameObjects[] array will cause the program to freeze */
            if (gameObjects[i] === undefined) {
                gameObjects[i] = new GameObject();
            }

            if (gameObjects[i].isDisplayed()) {
                gameObjects[i].render();
            }
        }
    }

    collisionDetection() {
        /* If you need to implement collision detection in your game, then you can overwrite this method in your sub-class. */
        /* If you do not need to implement collision detection, then you do not need to overwrite this method.              */
    }
}

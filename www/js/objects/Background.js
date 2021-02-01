class Background extends ExtendedGameObject {

    constructor(imageBackground) {
        super(0, 0);
        this.image = imageBackground;

    }

    render() {
        ctx.drawImage(this.image, 0, 0, canvas.width, canvas.height);
    }

}
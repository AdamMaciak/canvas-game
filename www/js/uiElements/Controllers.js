class Controllers extends ExtendedGameObject {
    constructor(left, right, attack, jump) {
        super(tickGame);
        this.left = left;
        this.right = right;
        this.attack = attack;
        this.jump = jump;
    }

    render() {
        ctx.drawImage(this.left, 100, canvas.height - 200, 200, 200);
        ctx.drawImage(this.right, 400, canvas.height - 200, 200, 200);
        ctx.drawImage(this.attack, canvas.width - 600, canvas.height - 200, 200, 200);
        ctx.drawImage(this.jump, canvas.width - 300, canvas.height - 200, 200, 200);
    }

}
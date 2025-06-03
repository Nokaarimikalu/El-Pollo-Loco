class Cloud extends MoveableObject {
    y = 0;
    width = 700;
    height = 300;
    constructor() {
        super().loadImage(`img/5_background/layers/4_clouds/1.png`);
        this.x = Math.random() * 200;
        this.moveLeft();
    }
}

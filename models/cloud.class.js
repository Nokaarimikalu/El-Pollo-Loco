class Cloud extends MoveableObject {
    constructor() {
        super().loadImage(`img/5_background/layers/4_clouds/1.png`);
        this.x = Math.random() * 200;
        this.y = 0;
        this.width = 700;
        this.height = 300;
    }
}

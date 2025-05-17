class Chicken extends MoveableObject {
    constructor() {
        super().loadImage(`img/3_enemies_chicken/chicken_normal/1_walk/1_w.png`);
        this.x = 300 + Math.random() * 500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -= 0.5;
        }, 1000 / 60);
    }
}

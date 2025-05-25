class Chicken extends MoveableObject {
    
    constructor() {
        super()
        this.loadImage(ImageHub.chicken_normal.walk[0]);
        this.x = 300 + Math.random() * 1000;
        this.loadImages(ImageHub.chicken_normal.walk);
        this.moveLeft();
        this.speed = 0.3 + Math.random() * 1;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(ImageHub.chicken_normal.walk);
        },1000/5 );
    }
}

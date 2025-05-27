class Chicken extends MoveableObject {
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }

    rx;
    ry;
    rw;
    rh;
    
    constructor() {
        super();
        this.loadImages(ImageHub.chicken_normal.walk);
        this.loadImage(ImageHub.chicken_normal.walk[0]);
        this.x = 300 + Math.random() * 1000;
        this.speed = 0.3 + Math.random() * 1;
        Intervalhub.startInterval(this.animate,1000 / 5);
        // Intervalhub.startInterval(this.moveLeft, 1000 / 60)
    }

    animate = () => {
            this.playAnimation(ImageHub.chicken_normal.walk);
    }

}

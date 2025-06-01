class Chicken extends MoveableObject {
    offset = {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5,
    };

    rx;
    ry;
    rw;
    rh;

    constructor() {
        super();
        Intervalhub.startInterval(this.getRealFrame, 1000 / 60);
        this.loadImages(ImageHub.chicken_normal.walk);
        this.loadImage(ImageHub.chicken_normal.walk[0]);
        this.x = 300 + Math.random() * 1000;
        this.speed = 0.3 + Math.random() * 1;
        Intervalhub.startInterval(this.animate, 1000 / 5);
        // Intervalhub.startInterval(this.moveLeft, 1000 / 60);
    }

    animate = () => {
        this.playAnimation(ImageHub.chicken_normal.walk);
    };
}

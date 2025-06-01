class Endboss extends MoveableObject {
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    };

    rx;
    ry;
    rw;
    rh;

    height = 400;
    width = 250;
    y = 40;
    constructor() {
        super();
        this.loadImage(ImageHub.chicken_boss.alert[0]);
        this.loadImages(ImageHub.chicken_boss.alert);
        this.animate();
        this.x = 2300;
    }

    animate() {
        setInterval(() => {
            this.playAnimation(ImageHub.chicken_boss.alert);
        }, 350);
    }
}

class Endboss extends MoveableObject {
    offset = {
        top: 70,
        right: 15,
        bottom: 20,
        left: 15,
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

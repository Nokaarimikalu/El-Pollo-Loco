class throwableSalsa extends MoveableObject {
    offset = {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
    };

    rx;
    ry;
    rw;
    rh;
    height = 60;
    width = 50;

    constructor(x, y) {
        super();
        this.loadImage(ImageHub.salsa.spinning_salsa[0]);
        this.loadImages(ImageHub.salsa.spinning_salsa);
        Intervalhub.startInterval(this.animate, 1000 / 20);
        this.throw(x, y);
    }
    animate = () => {
        this.playAnimation(ImageHub.salsa.spinning_salsa);
    };

    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 20;
        Intervalhub.startInterval(this.flyingbottle, 1000 / 60);
        Intervalhub.startInterval(this.applyGravitySalsa, 1000 / 30);
    }

    flyingbottle = () => {
        this.x += 10;
    };

    stopsAtTheGround() {
        if (this.y > 170) {
            Intervalhub.startInterval(this.applyGravitySalsa, 1000 / 30);
        } else {
            return;
        }
    }

    applyGravitySalsa = () => {
        if (this.y > 170) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }
    };
}

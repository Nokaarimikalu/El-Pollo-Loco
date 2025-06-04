class throwableSalsa extends MoveableObject {
    gothit = false;
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
        this.loadImages(ImageHub.salsa.salsa_splash);
        this.throw(x, y);
    }

    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 20;
        Intervalhub.startInterval(this.showImage, 1000 / 10);
        Intervalhub.startInterval(this.flyingbottle, 1000 / 60);
        Intervalhub.startInterval(this.applyGravitySalsa, 1000 / 30);
        Intervalhub.startInterval(this.getRealFrame, 1000 / 60);
    }

    flyingbottle = () => {
        this.x += 10;
    };

    applyGravitySalsa = () => {
        if (this.isAboveGround() || this.y > 170) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }
    };

    showImage = () => {
        Intervalhub.startInterval(() => this.playAnimation(ImageHub.salsa.spinning_salsa), 1000 / 30);

        if (this.gotHit) {
            Intervalhub.startInterval(() => this.playAnimation(ImageHub.salsa.salsa_splash), 1000 / 30);
        }
    };
}

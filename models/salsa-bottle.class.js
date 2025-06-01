class SalsaBottle extends ConsumeableObject {
    y = 340;
    offset = {
        top: 12,
        right: 14,
        bottom: 10,
        left: 20,
    };

    rx;
    ry;
    rw;
    rh;

    constructor(x) {
        super();
        Intervalhub.startInterval(this.getRealFrame, 1000 / 60);
        const random_i = Math.floor(Math.random() * ImageHub.salsa.on_ground.length); //floor rundet ab
        const random_img = ImageHub.salsa.on_ground[random_i];
        this.loadImage(random_img);

        this.x = x;
    }
}

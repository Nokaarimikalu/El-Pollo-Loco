class Chicken extends MoveableObject {
    hp = 50;
    isDead = false;
    isHit = false;
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
        this.speed = 0.3 + Math.random() * 1; // loeschen bevor ich es abgebe!
        Intervalhub.startInterval(this.animate, 1000 / 5);
        //Intervalhub.startInterval(this.moveLeft, 1000 / 60);
    }

    animate = () => {
        if (this.isDead === false) {
            this.playAnimation(ImageHub.chicken_normal.walk);
        } else {
            this.loadImage(ImageHub.chicken_normal.dead[0]);
        }
    };

    loadImageChicken() {
        this.loadImage(ImageHub.chicken_normal.walk[0]);
    }
}

class SmallChicken extends MoveableObject {
    hp = 25;
    isHit = false;
    isDead = false;
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
        this.loadImages(ImageHub.chicken_small.walk);
        this.loadImage(ImageHub.chicken_small.walk[0]);
        this.x = 300 + Math.random() * 1000;
        this.speed = 0.3 + Math.random() * 1; // loeschen bevor ich es abgebe!
        Intervalhub.startInterval(this.animate, 1000 / 5);
        //Intervalhub.startInterval(this.moveLeft, 1000 / 60);
    }

    animate = () => {
        if (this.isDead === false) {
            this.playAnimation(ImageHub.chicken_small.walk);
        } else {
            this.loadImage(ImageHub.chicken_small.dead[0]);
        }
    };

    loadImageChicken() {
        this.loadImage(ImageHub.chicken_small.walk[0]);
    }
}

class GreyRat extends MoveableObject {
    WALKING_RAT = [`own.img/enemy/greyRat/walking_rat_1.png`, `own.img/enemy/greyRat/walking_rat_2.png`, `own.img/enemy/greyRat/walking_rat_3.png`];
    constructor() {
        super().loadImage(`own.img/enemy/greyRat/walking_rat_1.png`);
        this.x = 300 + Math.random() * 1000;
        this.loadImages(this.WALKING_RAT);
        this.moveLeft();
        this.speed = 0.3 + Math.random() * 1;
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.WALKING_RAT.length;
            let path = this.WALKING_RAT[i];
            this.img = this.ImageCache[path];
            this.currentImage++;
        }, 190);
    }
}

class BrownRat extends MoveableObject {
    WALKING_RAT = [`own.img/enemy/brownRat/walking_rat_1.png`, `own.img/enemy/brownRat/walking_rat_2.png`, `own.img/enemy/brownRat/walking_rat_3.png`];

    constructor() {
        super().loadImage(`own.img/enemy/brownRat/walking_rat_1.png`);
        this.x = 300 + Math.random() * 1000;
        this.loadImages(this.WALKING_RAT);
        this.moveLeft();
        this.speed = 0.3 + Math.random() * 1;
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.WALKING_RAT.length;
            let path = this.WALKING_RAT[i];
            this.img = this.ImageCache[path];
            this.currentImage++;
        }, 190);
    }
}

class WhiteRat extends MoveableObject {
    WALKING_RAT = [
        `own.img/enemy/whiteRat/White_rat_frame_1.png`,
        `own.img/enemy/whiteRat/White_rat_frame_2.png`,
        `own.img/enemy/whiteRat/White_rat_frame_3.png`,
    ];

    constructor() {
        super().loadImage(`own.img/enemy/whiteRat/White_rat_frame_1.png`);
        this.x = 300 + Math.random() * 1000;
        this.loadImages(this.WALKING_RAT);
        this.moveLeft();
        this.speed = 0.3 + Math.random() * 1;
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.WALKING_RAT.length;
            let path = this.WALKING_RAT[i];
            this.img = this.ImageCache[path];
            this.currentImage++;
        }, 190);
    }
}

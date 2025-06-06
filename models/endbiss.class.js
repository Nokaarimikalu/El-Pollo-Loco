class Endboss extends MoveableObject {
    hp = 300;
    isHit = false;
    canAttack = true;
    isAttacking = false;
    playerIsNear = false;
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
    x = 2300;
    constructor() {
        super();
        Intervalhub.startInterval(this.getRealFrame, 1000 / 60);
        Intervalhub.startInterval(() => this.animate(), 1000 / 5);
        this.loadImage(ImageHub.chicken_boss.attack[0]);
        this.loadImage(ImageHub.chicken_boss.alert[0]);
        this.loadImage(ImageHub.chicken_boss.hurt[0]);
        this.loadImage(ImageHub.chicken_boss.dead[0]);
        this.loadImage(ImageHub.chicken_boss.walk[0]);
        this.loadImages(ImageHub.chicken_boss.alert);
        this.loadImages(ImageHub.chicken_boss.hurt);
        this.loadImages(ImageHub.chicken_boss.dead);
        this.loadImages(ImageHub.chicken_boss.attack);
        this.loadImages(ImageHub.chicken_boss.walk);
    }

    animate() {
        if (this.hp == 0) {
            this.playAnimation(ImageHub.chicken_boss.dead);
        } else if (this.isHit) {
            this.playAnimation(ImageHub.chicken_boss.hurt);
            setTimeout(() => {
                this.isHit = false;
            }, 300);
        } else if (this.isAttacking) {
            this.playAnimation(ImageHub.chicken_boss.attack);
        } else if (this.playerIsNear) {
            this.playAnimation(ImageHub.chicken_boss.walk);
        } else {
            this.playAnimation(ImageHub.chicken_boss.alert);
        }
    }

    attackAnimation() {
        if (!this.isAttacking && this.canAttack) {
            this.isAttacking = true;
            this.canAttack = false;

            setTimeout(() => {
                this.isAttacking = false;
            }, 500);

            setTimeout(() => {
                this.canAttack = true;
            }, 500);
        }
    }
}

class MoveableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    lastAction = new Date().getTime();

    applyGravity = () => {
        if (this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }
    };

    isAboveGround() {
        return this.y < 170;
    }

    isColliding(mo) {
        return this.rx + this.rw > mo.rx && this.ry + this.rh > mo.ry && this.rx < mo.rx + mo.rw && this.ry < mo.ry + mo.rh;
    }

    getRealFrame = () => {
        this.rx = this.x + this.offset.left;
        this.ry = this.y + this.offset.top;
        this.rw = this.width - this.offset.left - this.offset.right;
        this.rh = this.height - this.offset.top - this.offset.bottom;
    };

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.ImageCache[path];
        this.currentImage++;
    }

    moveRight = () => {
        this.x += this.speed;
    };

    moveLeft = () => {
        this.x -= this.speed;
    };

    jump = () => {
        this.speedY = 30;
    };

    hit() {
        this.energy -= 0.5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead() {
        return this.energy == 0;
    }

    isHurtAnimation() {
        let timepassed = (new Date().getTime() - this.lastHit) / 1000;
        return timepassed < 0.5;
    }

    updateActivity() {
        this.lastAction = new Date().getTime();
    }

    isLongIdle() {
        let timePassed = (new Date().getTime() - this.lastAction) / 1000;
        return timePassed > 3;
    }
}

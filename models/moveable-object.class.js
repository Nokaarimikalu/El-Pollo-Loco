class MoveableObject {
    x = 100;
    y = 350;
    img;
    width = 80;
    height = 80;
    currentImage = 0;
    ImageCache = {};
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;

    applyGravity = () => {
        if (this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }
    };

    isAboveGround() {
        return this.y < 170;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    isColliding(mo) {
        return this.rx + this.rw > mo.rx && this.ry + this.rh > mo.ry && this.rx < mo.rx + mo.rw && this.ry < mo.ry + mo.rh;
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof SalsaBottle || this instanceof Coin) {
            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawFrameoffset(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof SalsaBottle || this instanceof Coin) {
            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = "red";
            ctx.rect(
                this.x + this.offset.left,
                this.y + this.offset.top,
                this.width - this.offset.left - this.offset.right,
                this.height - this.offset.top - this.offset.bottom
            );
            ctx.stroke();
        }
    }

    getRealFrame = () => {
        this.rx = this.x + this.offset.left;
        this.ry = this.y + this.offset.top;
        this.rw = this.width - this.offset.left - this.offset.right;
        this.rh = this.height - this.offset.top - this.offset.bottom;
    };

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.ImageCache[path] = img;
        });
    }

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
}

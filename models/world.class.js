class World {
    character = new Character();
    hp_bar = new HpBar();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext(`2d`);
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        Intervalhub.startInterval(this.checkCollision, 1000 / 60);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // Kamera bewegt sich mit
        this.ctx.translate(this.camera_x, 0);
        // Level-Bilder + Character zeichnen
        this.drawLevelImages();
        this.addToMap(this.character);
        // Kamera zurücksetzen
        this.ctx.translate(-this.camera_x, 0);
        // HUD was sich nicht bewegen soll
        this.addToMap(this.hp_bar);
        //Wiederholung der Frames
        requestAnimationFrame(() => this.draw());
    }

    setWorld() {
        // damit der char weiss auf welche World er sich bezieht
        this.character.world = this;
    }

    checkCollision = () => {
        this.level.enemies.forEach((enemie) => {
            if (this.character.isColliding(enemie)) {
                this.character.hit();
                this.character.isHurtAnimation();
                this.hp_bar.setPercentage(this.character.energy);
            }
        });
    };

    drawLevelImages() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.salsa);
        this.addObjectsToMap(this.level.enemies);
    }

    addObjectsToMap(objects) {
        objects.forEach((o) => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);
        mo.drawFrameoffset(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    // fuer dem Character das wenn er nach links geht das sich die Bilder Spiegeln
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}

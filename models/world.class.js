class World {
    character = new Character();
    hp_bar = new HpBar();
    salsa_bar = new Salsa_Bar();
    coin_bar = new coin_bar();
    level = new Level();
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    throwableObjects = [];
    sperre = true;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext(`2d`);
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        Intervalhub.startInterval(this.checkCollision, 1000 / 60);
        Intervalhub.startInterval(this.checkCollisionSalsa, 1000 / 60);
        Intervalhub.startInterval(this.checkCollisionCoin, 1000 / 60);
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
        this.drawHUD();
        //Wiederholung der Frames
        requestAnimationFrame(() => this.draw());
    }

    setWorld() {
        // damit der char weiss auf welche World er sich bezieht
        this.character.world = this;
    }

    checkCollision = () => {
        this.jumpCollision();
        this.enemyToCharacterCollision();
        this.checkThrowableObjects();
    };

    checkCollisionSalsa = () => {
        for (let i = this.level.salsa.length - 1; i >= 0; i--) {
            const s = this.level.salsa[i];
            if (this.salsa_bar.percentage !== 100) {
                if (this.character.isColliding(s)) {
                    this.level.salsa.splice(i, 1);
                    this.salsa_bar.setPercentage((this.salsa_bar.percentage += 20));
                }
            } else {
                return;
            }
        }
    };

    checkCollisionCoin = () => {
        for (let i = this.level.coins.length - 1; i >= 0; i--) {
            const s = this.level.coins[i];
            if (this.coin_bar.percentage !== 100) {
                if (this.character.isColliding(s)) {
                    this.level.coins.splice(i, 1);
                    this.coin_bar.setPercentage((this.coin_bar.percentage += 6.25));
                }
            } else {
                return;
            }
        }
    };

    jumpCollision() {
        for (let i = this.level.enemies.length - 1; i >= 0; i--) {
            const chicken = this.level.enemies[i];
            // 1. Kollision von oben + Chicken stirbt
            if (!chicken.dead && this.character.isAboveGround() && this.character.isColliding(chicken)) {
                chicken.deadChicken(ImageHub.chicken_normal.dead);
                chicken.dead = true;
                this.character.speedY = 15;
                this.level.enemies.splice(i, 1);
                this.level.deadEnemies.push(chicken);
                setTimeout(() => {
                    const index = this.level.deadEnemies.indexOf(chicken);
                    if (index !== -1) {
                        this.level.deadEnemies.splice(index, 1);
                    }
                }, 1000);
            }
        }
    }
    enemyToCharacterCollision() {
        // 2. Seitliche Kollision
        this.level.enemies.forEach((enemie) => {
            if (this.character.isColliding(enemie)) {
                this.character.hit();
                this.hp_bar.setPercentage(this.character.energy);
            }
        });
    }

    checkThrowableObjects() {
        if (this.keyboard.C && this.sperre) {
            this.sperre = false;
            let bottle = new throwableSalsa(this.character.x + 80, this.character.y + 120);
            this.throwableObjects.push(bottle);
            console.log(this.throwableObjects.length);
        }
    }

    drawLevelImages() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.salsa);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.deadEnemies);
        this.addObjectsToMap(this.throwableObjects);
    }

    drawHUD() {
        this.addToMap(this.hp_bar);
        this.addToMap(this.salsa_bar);
        this.addToMap(this.coin_bar);
    }

    addObjectsToMap(objects) {
        objects.forEach((obj) => {
            this.addToMap(obj);
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

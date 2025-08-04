// #region class World

/**
 * Repräsentiert die Spielwelt mit Spiellogik, Rendering und Kollisionsprüfung.
 */
class World {
    // #region Properties

    /** @type {Character} Hauptfigur des Spiels */
    character = new Character();

    /** @type {HpBar} Lebensanzeige */
    hp_bar = new HpBar();

    /** @type {Salsa_Bar} Anzeige für Salsaflaschen */
    salsa_bar = new Salsa_Bar();

    /** @type {coin_bar} Anzeige für gesammelte Münzen */
    coin_bar = new coin_bar();

    /** @type {Endbossbar} Lebensanzeige des Endgegners */
    boss_bar = new Endbossbar();

    /** @type {Level} Aktuelles Level mit Umgebung und Gegnern */
    level = new Level();

    /** @type {HTMLCanvasElement} Zeichenfläche */
    canvas;

    /** @type {CanvasRenderingContext2D} Zeichenkontext */
    ctx;

    /** @type {Keyboard} Steuerung */
    keyboard;

    /** @type {number} X-Offset der Kamera */
    camera_x = 0;

    /** @type {Array<throwableSalsa>} Alle aktuell geworfenen Objekte */
    throwableObjects = [];

    /** @type {boolean} Sperre für das Werfen */
    sperre = true;

    /** @type {boolean} Gibt an, ob der Endboss aktiv ist */
    check = false;

    // #endregion

    /**
     * Initialisiert die Welt mit Zeichenkontext und Steuerung.
     * @param {HTMLCanvasElement} canvas - Das Canvas-Element.
     * @param {Keyboard} keyboard - Das Tastatureingabeobjekt.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        Intervalhub.startInterval(this.checkCollision, 1000 / 60);
        Intervalhub.startInterval(this.checkCollisionSalsa, 1000 / 60);
        Intervalhub.startInterval(this.checkCollisionCoin, 1000 / 60);
    }

    // #region Setup & Rendering

    /** Zeichnet die gesamte Spielszene und HUD */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(Math.floor(this.camera_x), 0);
        this.drawLevelImages();
        this.addToMap(this.character);
        this.ctx.translate(-Math.floor(this.camera_x), 0);
        this.drawHUD();
        requestAnimationFrame(() => this.draw());
    }

    /** Verknüpft Objekte innerhalb der Welt */
    setWorld() {
        this.character.world = this;
        this.level.endboss.world = this;
    }

    /**
     * Spielt einen Sound ab und fügt ihn zur Audio-Kontrolle hinzu
     * @param {string} audioPath - Pfad zur Audio-Datei
     */
    playSound(audioPath) {
        if (audioPath) {
            const audio = AudioHub.createAudio(audioPath);
            
            // Aktuelle Lautstärke anwenden (aus game.js)
            if (typeof currentVolume !== 'undefined' && typeof isMuted !== 'undefined') {
                audio.volume = isMuted ? 0 : (currentVolume / 100);
            }
            
            // Audio zur Kontrolle hinzufügen (aus game.js)
            if (typeof allAudioObjects !== 'undefined') {
                allAudioObjects.push(audio);
            }
            
            audio.play().catch(error => {
                
            });
        }
    }

    chickenSound(enemy){
        if (enemy instanceof SmallChicken) {
            this.playSound(AudioHub.chicken.dead_small[0]);
        } else {
            this.playSound(AudioHub.chicken.dead[0]);
        }
    }

    // #endregion

    // #region Collision

    checkCollision = () => {
        this.jumpCollision();
        this.enemyToCharacterCollision();
        this.checkThrowableObjects();
        this.checkThrowableCollision();
        this.walkingEndboss();
        setTimeout(() => {
            this.character.protection = false;
        }, 200);
        this.gameOver();
        this.gameWon();
    };

    checkCollisionSalsa = () => {
        for (let i = this.level.salsa.length - 1; i >= 0; i--) {
            const s = this.level.salsa[i];
            if (this.salsa_bar.percentage !== 100 && this.character.isColliding(s)) {
                this.level.salsa.splice(i, 1);
                this.salsa_bar.setPercentage(this.salsa_bar.percentage + 20);
                this.playSound(AudioHub.collectibles.bottle[0]);
            }
        }
    };

    checkCollisionCoin = () => {
        for (let i = this.level.coins.length - 1; i >= 0; i--) {
            const s = this.level.coins[i];
            if (this.coin_bar.percentage !== 100 && this.character.isColliding(s)) {
                this.level.coins.splice(i, 1);
                this.coin_bar.setPercentage(this.coin_bar.percentage + 6.25);
                this.playSound(AudioHub.collectibles.coin[0]);
            }
        }
    };

    // #endregion

    jumpCollision() {
        for (let i = this.level.enemies.length - 1; i >= 0; i--) {
            const chicken = this.level.enemies[i];
            if (!chicken.chickenIsDead && this.character.isAboveGround() && this.character.isColliding(chicken) && this.character.speedY < 0) {
                chicken.chickenIsDead = true;
                this.character.speedY = 15;
                this.character.protection = true;
                this.level.enemies.splice(i, 1);
                this.level.deadEnemies.push(chicken);
                this.playSound(AudioHub.chicken.dead[0]);
                setTimeout(() => {
                    const index = this.level.deadEnemies.indexOf(chicken);
                    if (index !== -1) this.level.deadEnemies.splice(index, 1);
                }, 1000);
            }
        }
    }

    enemyToCharacterCollision() {
        if (!this.character.protection) {
            this.level.enemies.forEach((enemie) => {
                if (enemie instanceof Endboss && this.character.isColliding(enemie)) {
                    enemie.attackAnimation();
                    this.character.hit();
                    this.hp_bar.setPercentage(this.character.energy);
                } else if (this.character.isColliding(enemie)) {
                    this.character.hit();
                    this.hp_bar.setPercentage(this.character.energy);
                }
            });
        }
    }

    checkThrowableObjects() {
        if (this.keyboard.C && this.sperre && this.salsa_bar.percentage !== 0) {
            this.sperre = false;
            this.generateNewThrowableSalsa();
        }
    }

    generateNewThrowableSalsa() {
        let bottle = new throwableSalsa(this.character.x + 80, this.character.y + 120, this.character.otherDirection);
        this.throwableObjects.push(bottle);
        this.salsa_bar.setPercentage(this.salsa_bar.percentage - 20);
        setTimeout(() => {
            const index = this.throwableObjects.indexOf(bottle);
            if (index !== -1) this.throwableObjects.splice(index, 1);
        }, 4000);
    }

    checkThrowableCollision() {
        this.throwableObjects.forEach((salsa) => {
            for (let i = this.level.enemies.length - 1; i >= 0; i--) {
                const enemy = this.level.enemies[i];
                if (!enemy.isHit && (enemy instanceof Chicken || enemy instanceof SmallChicken) && salsa.isColliding(enemy)) {
                    enemy.hp -= 10;
                    this.killNormalEnemies(enemy, salsa, i);
                } else if (!enemy.isHit && enemy instanceof Endboss && salsa.isColliding(enemy) && !salsa.gotHit) {
                    enemy.hp -= 20;
                    this.killNormalEnemies(enemy, salsa, i);
                    this.boss_bar.setPercentage(enemy.hp);
                }
            }
        });
    }

    walkingEndboss() {
        const boss = this.level.endboss;
        if (this.character.x > 1800) {
            // Endboss aktivieren und Sound nur beim ersten Mal abspielen
            if (!this.check) {
                this.playSound(AudioHub.endboss.approachEndboss[0]);
            }
            this.check = true;
            this.addToMap(this.boss_bar);
        }
        if (this.check && boss.hp > 0 && boss.x > 300) {
            boss.x -= 3;
            boss.playerIsNear = true;
        }
        if (boss.hp <= 0 || boss.x <= 300) {
            boss.playerIsNear = false;
        }
    }

    killNormalEnemies(enemy, salsa, index) {
        enemy.isHit = true;
        salsa.gotHit = true;
        if (enemy.hp <= 0) {
            enemy.chickenIsDead = true;
            this.level.enemies.splice(index, 1);
            this.level.deadEnemies.push(enemy);
            this.chickenSound(this.enemy)
            setTimeout(() => {
                const idx = this.level.deadEnemies.indexOf(enemy);
                if (idx !== -1) this.level.deadEnemies.splice(idx, 1);
            }, 2000);
        } else {
            setTimeout(() => {
                enemy.isHit = false;
            }, 2000);
        }
    }

    // #region Drawing

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
        if (this.check) {
            this.addToMap(this.boss_bar);
        }
    }

    addObjectsToMap(objects) {
        objects.forEach((obj) => {
            this.addToMap(obj);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) this.flipImage(mo);
        mo.draw(this.ctx);
        // mo.drawFrameoffset(this.ctx);
        if (mo.otherDirection) this.flipImageBack(mo);
    }

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

    gameOver() {
        if (this.character.energy == 0) {
            // Alle Sounds stoppen
            window.stopAllSounds();
            
            // Game Over Sound abspielen
            setTimeout(() => {
                this.playSound(AudioHub.gameEnd.gameOver[0]);
            }, 100);
            
            Intervalhub.stopAllintervals();
            document.querySelector(".loosing-area").classList.remove("d_none");
        }
    }

    gameWon() {
        if (this.level.endboss.hp == 0) {
            // Alle Sounds stoppen
            window.stopAllSounds();
            
            // Victory Sound abspielen
            setTimeout(() => {
                this.playSound(AudioHub.gameEnd.victory[0]);
            }, 100);
            
            setTimeout(() => {
                Intervalhub.stopAllintervals();
                document.querySelector(".winning-area").classList.remove("d_none");
            }, 2000);
        }
    }

    // #endregion
}

// #endregion

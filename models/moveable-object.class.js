// #region class MoveableObject

/**
 * Basisklasse für bewegliche Objekte im Spiel.
 * Beinhaltet Schwerkraft, Kollision, Bewegung und Zustandsabfragen.
 */
class MoveableObject extends DrawableObject {
    // #region Properties

    /** Bewegungsgeschwindigkeit (horizontal) */
    speed = 0.15;

    /** Gibt an, ob das Objekt gespiegelt (nach links schauend) ist */
    otherDirection = false;

    /** Vertikale Geschwindigkeit (z. B. beim Springen) */
    speedY = 0;

    /** Beschleunigung nach unten (Schwerkraft) */
    acceleration = 2.5;

    /** Lebenspunkte oder Energie des Objekts */
    energy = 100;

    /** Zeitstempel des letzten Treffers */
    lastHit = 0;

    /** Zeitpunkt der letzten Aktivität (z. B. Bewegung) */
    lastAction = new Date().getTime();

    /** Kollisionsrahmen: real x/y/width/height */
    rx;
    ry;
    rw;
    rh;

    // #endregion

    // #region Movement & Gravity

    /**
     * Wendet Schwerkraft an, wenn Objekt nicht auf dem Boden ist.
     */
    applyGravity = () => {
        if (this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }
    };

    /**
     * Springt nach oben.
     */
    jump = () => {
        this.speedY = 30;
    };

    /**
     * Bewegt das Objekt nach rechts.
     */
    moveRight = () => {
        this.x += this.speed;
    };

    /**
     * Bewegt das Objekt nach links.
     */
    moveLeft = () => {
        this.x -= this.speed;
    };

    // #endregion

    // #region Collision & Position

    /**
     * Gibt zurück, ob sich das Objekt über dem Boden befindet.
     * @returns {boolean}
     */
    isAboveGround() {
        return this.y < 170;
    }

    /**
     * Prüft, ob dieses Objekt mit einem anderen kollidiert.
     * @param {MoveableObject} mo - Ein anderes bewegliches Objekt
     * @returns {boolean}
     */
    isColliding(mo) {
        return this.rx + this.rw > mo.rx && this.ry + this.rh > mo.ry && this.rx < mo.rx + mo.rw && this.ry < mo.ry + mo.rh;
    }

    /**
     * Berechnet den realen Kollisionsrahmen.
     */
    getRealFrame = () => {
        this.rx = this.x + this.offset.left;
        this.ry = this.y + this.offset.top;
        this.rw = this.width - this.offset.left - this.offset.right;
        this.rh = this.height - this.offset.top - this.offset.bottom;
    };

    // #endregion

    // #region Animation

    /**
     * Spielt eine Frame-basierte Animation ab.
     * @param {string[]} images - Array von Bildpfaden
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.ImageCache[path];
        this.currentImage++;
    }

    // #endregion

    // #region Zustand / Energie / Aktionen

    /**
     * Verursacht Schaden und speichert den Zeitpunkt.
     */
    hit() {
        this.energy -= 0.5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Prüft, ob das Objekt keine Energie mehr hat.
     * @returns {boolean}
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * Gibt an, ob kürzlich Schaden erlitten wurde (für Animation).
     * @returns {boolean}
     */
    isHurtAnimation() {
        let timepassed = (new Date().getTime() - this.lastHit) / 1000;
        return timepassed < 0.5;
    }

    /**
     * Aktualisiert den Zeitstempel der letzten Aktion.
     */
    updateActivity() {
        this.lastAction = new Date().getTime();
    }

    /**
     * Prüft, ob das Objekt länger als 3 Sekunden untätig war.
     * @returns {boolean}
     */
    isLongIdle() {
        let timePassed = (new Date().getTime() - this.lastAction) / 1000;
        return timePassed > 3;
    }

    // #endregion
}

// #endregion

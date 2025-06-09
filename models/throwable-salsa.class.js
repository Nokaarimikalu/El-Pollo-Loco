// #region class throwableSalsa

/**
 * Repräsentiert ein geworfenes Salsa-Objekt, das sich bewegt und animiert ist.
 */
class throwableSalsa extends MoveableObject {
    // #region Properties

    /** @type {boolean} Gibt an, ob das Objekt getroffen hat */
    gotHit = false;

    /** Offset-Werte zur Kollisionsanpassung */
    offset = {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
    };

    /** Höhe des Objekts */
    height = 60;

    /** Breite des Objekts */
    width = 50;

    // #endregion

    /**
     * Erstellt ein neues Salsa-Wurfobjekt an Position x, y.
     * @param {number} x - Startposition X
     * @param {number} y - Startposition Y
     */
    constructor(x, y) {
        super();
        this.loadImage(ImageHub.salsa.spinning_salsa[0]);
        this.loadImages(ImageHub.salsa.spinning_salsa);
        this.loadImages(ImageHub.salsa.salsa_splash);
        this.throw(x, y);
    }

    // #region Movement & Animation

    /**
     * Startet den Wurf und die Animation.
     * @param {number} x - X-Startposition
     * @param {number} y - Y-Startposition
     */
    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 20;
        Intervalhub.startInterval(this.showImage, 1000 / 10);
        Intervalhub.startInterval(this.flyingbottle, 1000 / 60);
        Intervalhub.startInterval(this.applyGravitySalsa, 1000 / 30);
        Intervalhub.startInterval(this.getRealFrame, 1000 / 60);
    }

    /**
     * Bewegt die Flasche nach rechts.
     */
    flyingbottle = () => {
        this.x += 10;
    };

    /**
     * Simuliert Schwerkraft für die Flasche.
     */
    applyGravitySalsa = () => {
        if (this.isAboveGround() || this.y > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }
    };

    /**
     * Zeigt die passende Animation (spinning oder splash).
     */
    showImage = () => {
        Intervalhub.startInterval(() => this.playAnimation(ImageHub.salsa.spinning_salsa), 1000 / 30);

        if (this.gotHit) {
            Intervalhub.startInterval(() => this.playAnimation(ImageHub.salsa.salsa_splash), 1000 / 30);
        }
    };

    // #endregion
}

// #endregion

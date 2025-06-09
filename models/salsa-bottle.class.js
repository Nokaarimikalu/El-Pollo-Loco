// #region class SalsaBottle

/**
 * Repräsentiert eine konsumierbare Salsaflasche auf dem Boden,
 * die vom Spieler eingesammelt werden kann.
 */
class SalsaBottle extends ConsumeableObject {
    // #region Properties

    /** Vertikale Position auf dem Boden */
    y = 340;

    /** Offset-Werte zur Kollisionsanpassung */
    offset = {
        top: 12,
        right: 14,
        bottom: 10,
        left: 20,
    };

    // #endregion

    /**
     * Erstellt eine neue SalsaBottle an der gegebenen X-Position mit zufälligem Bild.
     * @param {number} x - Die horizontale Startposition
     */
    constructor(x) {
        super();

        Intervalhub.startInterval(this.getRealFrame, 1000 / 60);

        const random_i = Math.floor(Math.random() * ImageHub.salsa.on_ground.length);
        const random_img = ImageHub.salsa.on_ground[random_i];
        this.loadImage(random_img);

        this.x = x;
    }
}

// #endregion

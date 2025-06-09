// #region class HpBar

/**
 * Darstellung der Lebensanzeige des Spielcharakters.
 * Erbt von der generischen Statusbar.
 */
class HpBar extends Statusbar {
    // #region Properties

    /** Prozentuale Lebensanzeige (0–100%) */
    percentage = 100;

    /** X-Position der Lebensleiste */
    x = 10;

    /** Y-Position der Lebensleiste (leicht über dem Rand) */
    y = -10;

    // #endregion

    /**
     * Erstellt eine neue Lebensanzeige und lädt alle Lebensbilder.
     */
    constructor() {
        super();
        this.loadImages(ImageHub.hitpointbar.hp);
        this.setPercentage(100);
    }

    /**
     * Setzt den aktuellen Prozentwert und aktualisiert das Bild.
     * @param {number} percentage - Lebenswert von 0 bis 100
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = ImageHub.hitpointbar.hp[this.resolveImageIndex()];
        this.img = this.ImageCache[path];
    }
}

// #endregion

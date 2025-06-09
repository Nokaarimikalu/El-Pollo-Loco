// #region class Endbossbar

/**
 * Darstellung der Lebensanzeige des Endgegners.
 * Erbt von der generischen Statusbar.
 */
class Endbossbar extends Statusbar {
    // #region Properties

    /** Prozentuale Lebensanzeige (0–100%) */
    percentage = 100;

    /** X-Position der Leiste (zentriert rechts im HUD) */
    x = 510;

    /** Y-Position der Leiste (leicht angehoben) */
    y = -3;

    // #endregion

    /**
     * Erstellt eine neue Endboss-Lebensleiste und lädt alle passenden Bilder.
     */
    constructor() {
        super();
        this.loadImages(ImageHub.hitpointbar.endboss);
        this.setPercentage(100);
    }

    /**
     * Setzt den aktuellen Prozentwert und aktualisiert das Bild entsprechend.
     * @param {number} percentage - Lebenswert von 0 bis 100
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = ImageHub.hitpointbar.endboss[this.resolveImageIndex()];
        this.img = this.ImageCache[path];
    }
}

// #endregion

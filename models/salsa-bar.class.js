// #region class Salsa_Bar

/**
 * Anzeige für den aktuellen Vorrat an Salsaflaschen.
 * Erbt von der generischen Statusbar.
 */
class Salsa_Bar extends Statusbar {
    // #region Properties

    /** X-Position der Leiste */
    x = 10;

    /** Y-Position der Leiste */
    y = 40;

    /** Aktueller Füllstand in Prozent */
    percentage = 0;

    // #endregion

    /**
     * Erstellt die Salsa-Bar und lädt passende Bilder.
     */
    constructor() {
        super();
        this.loadImages(ImageHub.hitpointbar.bottle);
        this.setPercentage(0);
    }

    /**
     * Setzt den Füllstand der Salsa-Leiste und aktualisiert das Bild.
     * @param {number} percentage - Neuer Prozentwert (0–100)
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        if (this.percentage > 100) {
            this.percentage = 100;
        }
        let path = ImageHub.hitpointbar.bottle[this.resolveImageIndex()];
        this.img = this.ImageCache[path];
    }
}

// #endregion

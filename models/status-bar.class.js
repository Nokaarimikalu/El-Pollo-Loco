// #region class Statusbar

/**
 * Eine generische Statusleiste (z. B. für Leben, Münzen, Salsa),
 * die auf Basis eines Prozentwertes ein passendes Bild anzeigt.
 */
class Statusbar extends DrawableObject {
    // #region Properties

    /** Breite der Statusleiste */
    width = 200;

    /** Höhe der Statusleiste */
    height = 60;

    /** Aktueller Prozentwert (0–100) */
    percentage = 100;

    // #endregion

    /**
     * Erstellt eine neue Statusbar-Instanz.
     */
    constructor() {
        super();
    }

    /**
     * Gibt den Bildindex zurück, der zur aktuellen Prozentzahl passt.
     * @returns {number} Index des darzustellenden Bildes (0–5)
     */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 10) {
            return 1;
        } else {
            return 0;
        }
    }
}

// #endregion

// #region class BackgroundObject

/**
 * Repräsentiert ein Hintergrundobjekt (z. B. Berge, Bäume, Himmel), das sich im Level verschiebt.
 * Erbt Bewegung und Zeichenfunktionen von MoveableObject.
 */
class BackgroundObject extends MoveableObject {
    // #region Properties

    /** Breite des Hintergrundbildes */
    width = 720;

    /** Höhe des Hintergrundbildes */
    height = 480;

    /** Y-Position (fix für Hintergrundobjekte) */
    y = 0;

    // #endregion

    // #region Konstruktor

    /**
     * Erstellt ein Hintergrundobjekt mit gegebenem Bild und X-Position.
     * @param {string} imagePath - Pfad zum Bild des Hintergrundobjekts
     * @param {number} x - X-Position, an der das Objekt erscheinen soll
     */
    constructor(imagePath, x) {
        super();
        this.loadImage(imagePath);
        this.x = x;
    }

    // #endregion
}

// #endregion

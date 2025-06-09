// #region class DrawableObject

/**
 * Basisklasse für alle zeichnbaren Objekte im Spiel.
 * Verwaltet Position, Größe, Bildquellen und das Zeichnen auf dem Canvas.
 */
class DrawableObject {
    // #region Properties

    /** X-Position des Objekts */
    x = 100;

    /** Y-Position des Objekts */
    y = 350;

    /** Breite des Objekts */
    width = 80;

    /** Höhe des Objekts */
    height = 80;

    /** Aktuell angezeigtes Bild */
    img;

    /** Zwischengespeicherte Bilder für Animationen */
    ImageCache = {};

    /** Index des aktuell angezeigten Bildes (für Animation) */
    currentImage = 0;

    // #endregion

    /**
     * Lädt ein einzelnes Bild.
     * @param {string} path - Pfad zum Bild
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Lädt mehrere Bilder in den ImageCache.
     * @param {string[]} array - Array von Bildpfaden
     */
    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.ImageCache[path] = img;
        });
    }

    /**
     * Zeichnet das Objekt auf das übergebene Canvas-Kontextobjekt.
     * @param {CanvasRenderingContext2D} ctx - Das Zeichenkontextobjekt
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Zeichnet ein rotes Rechteck zur Visualisierung des Kollisionsbereichs.
     * Nur bei bestimmten Objekttypen aktiv.
     * @param {CanvasRenderingContext2D} ctx
     */
    drawFrameoffset(ctx) {
        if (
            this instanceof Character ||
            this instanceof Chicken ||
            this instanceof Endboss ||
            this instanceof SalsaBottle ||
            this instanceof Coin ||
            this instanceof SmallChicken ||
            this instanceof throwableSalsa
        ) {
            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = "red";
            ctx.rect(
                this.x + this.offset.left,
                this.y + this.offset.top,
                this.width - this.offset.left - this.offset.right,
                this.height - this.offset.top - this.offset.bottom
            );
            ctx.stroke();
        }
    }

    // Optionaler Debug-Rahmen (auskommentiert):
    // drawFrame(ctx) {
    //     ctx.beginPath();
    //     ctx.lineWidth = "5";
    //     ctx.strokeStyle = "blue";
    //     ctx.rect(this.x, this.y, this.width, this.height);
    //     ctx.stroke();
    // }
}

// #endregion

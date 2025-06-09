// #region class Endboss

/**
 * Repräsentiert den Endgegner im Spiel.
 * Nutzt Animationen, Treffer- und Angriffszustände.
 */
class Endboss extends MoveableObject {
    // #region Properties

    /** Lebenspunkte des Endgegners */
    hp = 100;

    /** Wurde der Endboss kürzlich getroffen? */
    isHit = false;

    /** Darf der Endboss angreifen? */
    canAttack = true;

    /** Führt der Endboss gerade einen Angriff aus? */
    isAttacking = false;

    /** Offset-Werte zur Anpassung der Kollision */
    offset = {
        top: 70,
        right: 15,
        bottom: 20,
        left: 15,
    };

    /** Höhe des Endbosses */
    height = 400;

    /** Breite des Endbosses */
    width = 250;

    /** Y-Position im Spiel */
    y = 40;

    /** X-Position im Spiel (meist ganz rechts) */
    x = 2300;

    // #endregion

    /**
     * Erstellt einen neuen Endboss und startet Animation + Kollisionsrahmenberechnung.
     */
    constructor() {
        super();
        Intervalhub.startInterval(this.getRealFrame, 1000 / 60);
        Intervalhub.startInterval(() => this.animate(), 1000 / 5);
        this.loadEndbossImages();
    }

    // #region Initialisierung

    /**
     * Lädt alle benötigten Bilder für den Endboss (Animationen & Zustände).
     */
    loadEndbossImages() {
        this.loadImage(ImageHub.chicken_boss.attack[0]);
        this.loadImage(ImageHub.chicken_boss.alert[0]);
        this.loadImage(ImageHub.chicken_boss.hurt[0]);
        this.loadImage(ImageHub.chicken_boss.dead[0]);
        this.loadImage(ImageHub.chicken_boss.walk[0]);

        this.loadImages(ImageHub.chicken_boss.alert);
        this.loadImages(ImageHub.chicken_boss.hurt);
        this.loadImages(ImageHub.chicken_boss.dead);
        this.loadImages(ImageHub.chicken_boss.attack);
        this.loadImages(ImageHub.chicken_boss.walk);
    }

    // #endregion

    // #region Animation & Verhalten

    /**
     * Wählt basierend auf dem Zustand die passende Animation.
     */
    animate() {
        if (this.hp == 0) {
            this.playAnimation(ImageHub.chicken_boss.dead);
        } else if (this.isHit) {
            this.playAnimation(ImageHub.chicken_boss.hurt);
            setTimeout(() => {
                this.isHit = false;
            }, 300);
        } else if (this.isAttacking) {
            this.playAnimation(ImageHub.chicken_boss.attack);
        } else if (this.playerIsNear) {
            this.playAnimation(ImageHub.chicken_boss.walk);
        } else {
            this.playAnimation(ImageHub.chicken_boss.alert);
        }
    }

    // #endregion

    // #region Angriff

    /**
     * Führt die Angriffsanimation durch und aktiviert Sperrzeiten.
     */
    attackAnimation() {
        if (!this.isAttacking && this.canAttack) {
            this.isAttacking = true;
            this.canAttack = false;

            setTimeout(() => {
                this.isAttacking = false;
            }, 500);

            setTimeout(() => {
                this.canAttack = true;
            }, 500);
        }
    }

    // #endregion
}

// #endregion

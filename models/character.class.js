// #region class Character

/**
 * Hauptcharakter des Spiels (Pepe), steuerbar mit der Tastatur.
 * Reagiert auf Umgebung, Kollisionen und Benutzeraktionen.
 */
class Character extends MoveableObject {
    // #region Properties

    /** Startposition auf der X-Achse */
    x = 0;

    /** Startposition auf der Y-Achse */
    y = 170;

    /** Höhe des Charakters */
    height = 250;

    /** Breite des Charakters */
    width = 150;

    /** Bewegungsgeschwindigkeit */
    speed = 3.5;

    /** Letzter Zeitpunkt der Inaktivität */
    idleTime = new Date().getTime();

    /** Referenz auf die Welt (World-Instanz) */
    world;

    /** Schuetzt den Character von mulitplen collisions */
    protection = false;

    /** Kollisionsoffset */
    offset = {
        top: 110,
        right: 45,
        bottom: 10,
        left: 30,
    };

    // #endregion

    // #region Konstruktor

    /**
     * Erstellt eine neue Character-Instanz mit allen Animationen und startet Bewegung/Schwerkraft.
     */
    constructor() {
        super();
        Intervalhub.startInterval(this.getRealFrame, 1000 / 60);
        this.loadImage(ImageHub.mainCharacter.idle[0]);
        this.loadImagesFromMainChar();
        Intervalhub.startInterval(this.applyGravity, 1000 / 25);
        Intervalhub.startInterval(this.animate, 1000 / 6);
        Intervalhub.startInterval(this.leftAndRightAnimation, 1000 / 60);
    }

    // #endregion

    // #region Methoden

    /**
     * Spielt die passende Animation je nach Zustand (laufen, springen, verletzt, tot, idle).
     */
    animate = () => {
        if (this.isDead()) {
            this.playAnimation(ImageHub.mainCharacter.dead);
        } else if (this.isHurtAnimation()) {
            this.playAnimation(ImageHub.mainCharacter.hurt);
            this.updateActivity();
        } else if (this.isAboveGround()) {
            this.playAnimation(ImageHub.mainCharacter.jump);
            this.updateActivity();
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(ImageHub.mainCharacter.walk);
            this.updateActivity();
        } else {
            if (this.isLongIdle()) {
                this.playAnimation(ImageHub.mainCharacter.long_idle);
            } else {
                this.playAnimation(ImageHub.mainCharacter.idle);
            }
        }
    };

    /**
     * Reagiert auf Tastendrücke (Bewegung nach links/rechts oder springen).
     * Aktualisiert die Kamera-Position.
     */
    leftAndRightAnimation = () => {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.otherDirection = false;
            this.moveRight();
        }
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.otherDirection = true;
            this.moveLeft();
        }
        if (this.world.keyboard.SPACEBAR && !this.isAboveGround()) {
            this.jump();
        }
        this.world.camera_x = -this.x + 100;
    };

    /**
     * Lädt alle Animationsbilder für den Charakter.
     */
    loadImagesFromMainChar() {
        this.loadImages(ImageHub.mainCharacter.walk);
        this.loadImages(ImageHub.mainCharacter.jump);
        this.loadImages(ImageHub.mainCharacter.hurt);
        this.loadImages(ImageHub.mainCharacter.dead);
        this.loadImages(ImageHub.mainCharacter.idle);
        this.loadImages(ImageHub.mainCharacter.long_idle);
    }

    // #endregion
}

// #endregion

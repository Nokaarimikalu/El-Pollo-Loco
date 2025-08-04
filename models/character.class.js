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
    protection = false; //klappt nicht /:

    /** Sound-Cooldown für Character Sounds */
    soundCooldowns = {
        dead: false,
        jump: false,
        hurt: false,
        run: false
    };

    /** Aktuell laufender Run Sound */
    currentRunSound = null;

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
            this.handleDeadAnimation();
        } else if (this.isHurtAnimation()) {
            this.handleHurtAnimation();
        } else if (this.isAboveGround()) {
            this.handleJumpAnimation();
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.handleWalkAnimation();
        } else {
            this.handleIdleAnimation();
        }
    };

    /**
     * Behandelt die Tod-Animation und den zugehörigen Sound
     */
    handleDeadAnimation() {
        this.playAnimation(ImageHub.mainCharacter.dead);
        if (!this.soundCooldowns.dead && this.world) {
            this.world.playSound(AudioHub.character.dead[0]);
            this.soundCooldowns.dead = true;
        }
    }

    /**
     * Behandelt die Verletzungs-Animation und den zugehörigen Sound
     */
    handleHurtAnimation() {
        this.playAnimation(ImageHub.mainCharacter.hurt);
        
        // Run Sound stoppen bei Verletzung
        if (this.currentRunSound) {
            this.currentRunSound.pause();
            this.currentRunSound.currentTime = 0;
            this.currentRunSound = null;
        }
        
        if (!this.soundCooldowns.hurt && this.world) {
            this.world.playSound(AudioHub.character.damage[0]);
            this.soundCooldowns.hurt = true;
            setTimeout(() => {
                this.soundCooldowns.hurt = false;
            }, 1000);
        }
        this.updateActivity();
    }

    /**
     * Behandelt die Sprung-Animation und den zugehörigen Sound
     */
    handleJumpAnimation() {
        this.playAnimation(ImageHub.mainCharacter.jump);
        
        // Run Sound stoppen beim Springen
        if (this.currentRunSound) {
            this.currentRunSound.pause();
            this.currentRunSound.currentTime = 0;
            this.currentRunSound = null;
        }
        
        if (!this.soundCooldowns.jump && this.world) {
            this.world.playSound(AudioHub.character.jump[0]);
            this.soundCooldowns.jump = true;
            setTimeout(() => {
                this.soundCooldowns.jump = false;
            }, 500);
        }
        this.updateActivity();
    }

    /**
     * Behandelt die Lauf-Animation und den zugehörigen Sound
     */
    handleWalkAnimation() {
        this.playAnimation(ImageHub.mainCharacter.walk);
        
        // Run Sound nur starten, wenn er noch nicht läuft
        if (!this.currentRunSound && this.world) {
            this.currentRunSound = AudioHub.createAudio(AudioHub.character.run[0]);
            this.currentRunSound.loop = true; // Loop, solange gelaufen wird
            this.currentRunSound.play();
        }
        
        this.updateActivity();
    }

    /**
     * Behandelt die Idle-Animationen (normal und lang)
     */
    handleIdleAnimation() {
        // Run Sound stoppen, wenn Character nicht mehr läuft
        if (this.currentRunSound) {
            this.currentRunSound.pause();
            this.currentRunSound.currentTime = 0;
            this.currentRunSound = null;
        }
        
        if (this.isLongIdle()) {
            this.playAnimation(ImageHub.mainCharacter.long_idle);
        } else {
            this.playAnimation(ImageHub.mainCharacter.idle);
        }
    }

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

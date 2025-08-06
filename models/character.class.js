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
    speed = 4.5;

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
        run: false,
        snoring: false
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
        } else if (this.world && this.world.keyboard && (this.world.keyboard.RIGHT || this.world.keyboard.LEFT)) {
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
            AudioHub.playCharacterSound('dead');
            this.soundCooldowns.dead = true;
        }
    }

    /**
     * Stoppt den aktuellen Run Sound sicher
     */
    stopRunSound() {
        if (this.currentRunSound) {
            try {
                this.currentRunSound.pause();
                this.currentRunSound.currentTime = 0;
            } catch (error) {
                // Fehler beim Stoppen ignorieren
            }
            this.currentRunSound = null;
        }
    }

    /**
     * Behandelt die Verletzungs-Animation und den zugehörigen Sound
     */
    handleHurtAnimation() {
        this.playAnimation(ImageHub.mainCharacter.hurt);
        this.stopRunSound();     
        this.soundCooldowns.snoring = false;
        if (!this.soundCooldowns.hurt && this.world) {
            AudioHub.playCharacterSound('damage');
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
        this.stopRunSound();       
        this.soundCooldowns.snoring = false;      
        this.updateActivity();
    }

    /**
     * Behandelt die Lauf-Animation und den zugehörigen Sound
     */
    handleWalkAnimation() {
        this.playAnimation(ImageHub.mainCharacter.walk);
        
        this.soundCooldowns.snoring = false;
        
        // Run Sound nur starten, wenn er noch nicht läuft
        if (!this.currentRunSound && this.world) {
            this.currentRunSound = AudioHub.createCharacterRunSound();
            this.currentRunSound.play().catch(error => {
                if (error.name !== 'AbortError') {
                    // console.log("Run sound could not be played:", error);
                }
            });
        }
        
        this.updateActivity();
    }

    /**
     * Behandelt die Idle-Animationen (normal und lang)
     */
    handleIdleAnimation() {
        this.stopRunSound();  
        if (this.isLongIdle()) {
            this.playAnimation(ImageHub.mainCharacter.long_idle);
            if (!this.soundCooldowns.snoring && this.world) {
                AudioHub.playCharacterSound('snoring');
                this.soundCooldowns.snoring = true;
                setTimeout(() => {
                    this.soundCooldowns.snoring = false;
                }, 3000); 
            }
        } else {
            this.playAnimation(ImageHub.mainCharacter.idle);
            this.soundCooldowns.snoring = false;
        }
    }

    /**
     * Reagiert auf Tastendrücke (Bewegung nach links/rechts oder springen).
     * Aktualisiert die Kamera-Position.
     */
    leftAndRightAnimation = () => {
        if (this.world && this.world.keyboard) {
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
        }
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

    /**
     * Überschreibt die jump() Methode um Jump Sound hinzuzufügen
     */
    jump = () => {
        if (!this.soundCooldowns.jump && this.world) {
            AudioHub.playCharacterSound('jump');
            this.soundCooldowns.jump = true;
            setTimeout(() => {
                this.soundCooldowns.jump = false;
            }, 1000); // Längerer Cooldown, damit Sound nicht mehrfach kommt
        }
        this.speedY = 30;
    }
    // #endregion
}
// #endregion

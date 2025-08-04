// #region Global Variables

/** @type {HTMLCanvasElement} */
let canvas;

/** @type {World} */
let world;

/** @type {Keyboard} */
let keyboard = new Keyboard();

/** @type {number} */
let currentVolume = 50;

/** @type {boolean}  */
let isMuted = false;

/** @type {Audio} Hintergrundmusik */
let backgroundMusic = null;

/** @type {Array<Audio>} Alle Audio-Objekte für Lautstärke-Kontrolle */
let allAudioObjects = [];

// #endregion

// #region Initialization

/**
 * Initialisiert das Spiel, indem das Canvas-Element abgefragt und
 * eine neue Welt mit Tastatursteuerung erstellt wird.
 */
function startGame() {
    canvas = document.querySelector(`#canvas`);
    world = new World(canvas, keyboard);
    document.querySelector(".start-area").classList.add("d_none");
    document.querySelector(".Keybinds").classList.add("d_none");
    // Mobile Controls anzeigen
    document.querySelector(".mobile-controls").classList.add("show");
    
    // Hintergrundmusik starten
    startBackgroundMusic();
}

function startAgain() {
    Intervalhub.stopAllintervals();
    canvas = document.querySelector(`#canvas`);
    world = new World(canvas, keyboard);
    document.querySelector(".loosing-area").classList.add("d_none");
    // Mobile Controls anzeigen
    document.querySelector(".mobile-controls").classList.add("show");
    
    // Hintergrundmusik wieder starten
    startBackgroundMusic();
}

function endGame() {
    Intervalhub.stopAllintervals();
    document.querySelector(".loosing-area").classList.add("d_none");
    document.querySelector(".winning-area").classList.add("d_none");
    document.querySelector(".start-area").classList.remove("d_none");
    document.querySelector(".Keybinds").classList.remove("d_none");
    // Mobile Controls verstecken
    document.querySelector(".mobile-controls").classList.remove("show");
    
    // Hintergrundmusik stoppen
    stopBackgroundMusic();
}

// #endregion

// #region Audio Management

/**
 * Startet die Hintergrundmusik
 */
function startBackgroundMusic() {
    if (!backgroundMusic) {
        backgroundMusic = AudioHub.createBackgroundMusic(AudioHub.backgroundMusic.main[0]);
        allAudioObjects.push(backgroundMusic);
        
        // Aktuelle Lautstärke anwenden
        backgroundMusic.volume = isMuted ? 0 : (currentVolume / 100) * 0.5;
    }
    
    backgroundMusic.currentTime = 0; // Von Anfang starten
    backgroundMusic.play().catch(error => {
        console.log("Hintergrundmusik konnte nicht gestartet werden:", error);
    });
}

/**
 * Stoppt die Hintergrundmusik
 */
function stopBackgroundMusic() {
    if (backgroundMusic) {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
    }
}

/**
 * Stoppt alle laufenden Sounds (Hintergrundmusik und Effekte)
 */
function stopAllSounds() {
    // Hintergrundmusik stoppen
    stopBackgroundMusic();
    
    // Alle anderen Audio-Objekte stoppen
    allAudioObjects.forEach(audio => {
        if (audio && !audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
}

// Global verfügbar machen
window.stopAllSounds = stopAllSounds;

/**
 * Setzt die Lautstärke aller Spiel-Sounds
 * @param {number} volume - Lautstärke zwischen 0 und 1
 */
function setGameVolume(volume) {
    // Hintergrundmusik
    if (backgroundMusic) {
        backgroundMusic.volume = volume * 0.5; // Hintergrundmusik etwas leiser
    }
    
    // Alle anderen Audio-Objekte
    allAudioObjects.forEach(audio => {
        if (audio !== backgroundMusic) {
            audio.volume = volume;
        }
    });
}

// #endregion

// #region Event Listeners: Keyboard Input

/**
 * Hört auf Tastendruck und setzt die entsprechenden Flags im Keyboard-Objekt.
 */
window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {
        keyboard.RIGHT = true;
    }
    if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
        keyboard.LEFT = true;
    }
    if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {
        keyboard.UP = true;
    }
    if (event.key === "ArrowDown" || event.key === "s" || event.key === "S") {
        keyboard.DOWN = true;
    }
    if (event.key === " ") {
        keyboard.SPACEBAR = true;
    }
    if (event.key === "c" || event.key === "C") {
        keyboard.C = true;
    }
});

/**
 * Hört auf das Loslassen von Tasten und entfernt die entsprechenden Flags.
 */
window.addEventListener("keyup", (event) => {
    if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {
        keyboard.RIGHT = false;
    }
    if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
        keyboard.LEFT = false;
    }
    if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {
        keyboard.UP = false;
    }
    if (event.key === "ArrowDown" || event.key === "s" || event.key === "S") {
        keyboard.DOWN = false;
    }
    if (event.key === " ") {
        keyboard.SPACEBAR = false;
    }
    if (event.key === "c" || event.key === "C") {
        keyboard.C = false;
        world.sperre = true;
    }
});

// #endregion

// #region Mobile Touch Controls

/**
 * Initialisiert die Touch-Controls für mobile Geräte
 */
function initMobileControls() {
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');
    const jumpBtn = document.getElementById('jumpBtn');
    const throwBtn = document.getElementById('throwBtn');

    // Links-Button
    leftBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });
    leftBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });

    // Rechts-Button
    rightBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    rightBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });

    // Sprung-Button
    jumpBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACEBAR = true;
    });
    jumpBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACEBAR = false;
    });

    // Wurf-Button
    throwBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.C = true;
    });
    throwBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.C = false;
        if (world) {
            world.sperre = true;
        }
    });

    // Zusätzlich auch Mouse-Events für Desktop-Testing
    [leftBtn, rightBtn, jumpBtn, throwBtn].forEach(btn => {
        btn.addEventListener('mousedown', (e) => {
            e.preventDefault();
            const btnId = e.target.id;
            switch(btnId) {
                case 'leftBtn': keyboard.LEFT = true; break;
                case 'rightBtn': keyboard.RIGHT = true; break;
                case 'jumpBtn': keyboard.SPACEBAR = true; break;
                case 'throwBtn': keyboard.C = true; break;
            }
        });
        
        btn.addEventListener('mouseup', (e) => {
            e.preventDefault();
            const btnId = e.target.id;
            switch(btnId) {
                case 'leftBtn': keyboard.LEFT = false; break;
                case 'rightBtn': keyboard.RIGHT = false; break;
                case 'jumpBtn': keyboard.SPACEBAR = false; break;
                case 'throwBtn': 
                    keyboard.C = false; 
                    if (world) world.sperre = true;
                    break;
            }
        });
    });
}

// Touch-Controls nach DOM-Load initialisieren
document.addEventListener('DOMContentLoaded', () => {
    initMobileControls();
    initAudioControls();
});

// #endregion

// #region Audio Controls

/**
 * Initialisiert die Audio-Controls für Desktop und Mobile
 */
function initAudioControls() {
    const volumeSlider = document.getElementById('volumeSlider');
    const audioToggle = document.getElementById('audioToggle');
    const audioIcon = document.getElementById('audioIcon');

    // Desktop Volume Slider
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            currentVolume = e.target.value;
            setGameVolume(currentVolume / 100);
            
            // Update mobile button state
            if (currentVolume == 0) {
                isMuted = true;
                audioIcon.textContent = '🔇';
                audioToggle.classList.add('muted');
            } else {
                isMuted = false;
                audioIcon.textContent = '🔊';
                audioToggle.classList.remove('muted');
            }
        });
    }

    if (audioToggle) {
        audioToggle.addEventListener('click', () => {
            isMuted = !isMuted;
            
            if (isMuted) {
                audioIcon.textContent = '🔇';
                audioToggle.classList.add('muted');
                setGameVolume(0);
                volumeSlider.value = 0;
            } else {
                audioIcon.textContent = '🔊';
                audioToggle.classList.remove('muted');
                setGameVolume(currentVolume / 100);
                volumeSlider.value = currentVolume;
            }
        });
    }
}


// #endregion

// #region Global Variables

/** @type {HTMLCanvasElement} */
let canvas;

/** @type {World} */
let world;

/** @type {Keyboard} */
let keyboard = new Keyboard();

// #endregion

// #region Initialization

/**
 * Initialisiert das Spiel, indem das Canvas-Element abgefragt und
 * eine neue Welt mit Tastatursteuerung erstellt wird.
 */
function init() {
    canvas = document.querySelector(`#canvas`);
    world = new World(canvas, keyboard);
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

// #region class Keyboard

/**
 * Repräsentiert den aktuellen Zustand der Tastatureingaben.
 * Die Flags werden durch Event Listener gesetzt/zurückgesetzt.
 */
class Keyboard {
    // #region Properties

    /** Linke Pfeiltaste oder A gedrückt */
    LEFT = false;

    /** Rechte Pfeiltaste oder D gedrückt */
    RIGHT = false;

    /** Oben-Pfeil oder W gedrückt */
    UP = false;

    /** Unten-Pfeil oder S gedrückt */
    DOWN = false;

    /** Leertaste gedrückt (z. B. für Sprung) */
    SPACEBAR = false;

    /** Taste C gedrückt (z. B. für Werfen) */
    C = false;

    // #endregion
}

// #endregion

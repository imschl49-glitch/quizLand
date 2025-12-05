window.addKeyListener = () => {
    // Verhindert Mehrfachregistrierungen
    if (window.keyListenerRegistered) return;
    window.keyListenerRegistered = true;

    document.addEventListener("keydown", (event) => {
        // Nur bei Enter-Taste ausführen
        if (event.key === "Enter") {
            // Prüfen, ob das Event nicht in einem Eingabefeld (z. B. input, textarea) ausgelöst wird
            if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
                return; // Ignoriere Eingaben in Textfeldern
            }

            // Button-IDs überprüfen
            const btnTrue = document.getElementById("btnTrue");
            const btnFalse = document.getElementById("btnFalse");

            if (btnTrue && !btnTrue.disabled) {
                btnTrue.click();
            } else if (btnFalse && !btnFalse.disabled) {
                btnFalse.click();
            }
        }
    });
};

/* ============================================================
   OR_KERNEL.js – iki1uc Orbit-Kern für den gesamten OR-Ordner
   ============================================================ */

import { OR_PRE_STAGE } from "./OR_PRE_STAGE.js";
import { LAGE } from "./LAGE.js";
import { NAME } from "./NAME.js";
import { ORBIT } from "./ORBIT.js";
import { ARBIT } from "./ARBIT.js";
import { RESPO_INTEGRATION } from "./RESPO_INTEGRATION.js";
import { OR_TIME_LAYER } from "./OR_TIME_LAYER.js";

/* ============================================================
   OR-KERNEL: zentrale Funktion
   ============================================================ */

export function OR_KERNEL(file, Phi=1, phi=0.7, phi2=0.4, phiinfty=0.9, scroll=0, zoom=1){

    // 1. Vorstufe
    const meta = OR_PRE_STAGE(file);

    // 2. Name + Signatur + RESPO-ID
    const name = NAME(file);

    // 3. Orbit-Achsen
    const orbit = ORBIT(Phi, phi, phi2, phiinfty);

    // 4. Lage
    const lage = LAGE(Phi, phi, phi2, phiinfty);

    // 5. ARBIT-Konstellation
    const arbit = ARBIT(Phi, phi, phi2, phiinfty);

    // 6. RESPO-Integration
    const respo = RESPO_INTEGRATION(meta, orbit, arbit);

    // 7. OR-TIME-LAYER
    const time = OR_TIME_LAYER(Phi, phi, phi2, phiinfty, scroll, zoom);

    // 8. OR-KERNEL Output
    return {
        file,
        signature: name.signatur,
        respo_id: name.respo,
        orbit,
        lage,
        arbit,
        respo,
        time
    };
}


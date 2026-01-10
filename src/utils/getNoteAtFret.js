import { CHROMATIC_SCALE } from "../data/notes";

export function getNoteAtFret(openNote, fret) {
    const openIndex = CHROMATIC_SCALE.indexOf(openNote);
    return CHROMATIC_SCALE[(openIndex + fret) % CHROMATIC_SCALE.length];
}

export function getFretNotes(fret) {
    const CHROMATIC = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    const OPEN_STRINGS = ["E", "A", "D", "G", "B", "E"];
    return OPEN_STRINGS.map(openNote => {
        const startIndex = CHROMATIC.indexOf(openNote);
        const noteIndex = (startIndex + fret) % CHROMATIC.length;
        return CHROMATIC[noteIndex];
    });
}
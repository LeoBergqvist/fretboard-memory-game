import { useState } from "react";

export default function Fretboard() {
    const [selectedNotes, setSelectedNotes] = useState({});
    const strings = ["E", "A", "D", "G", "B", "e"]; // low to high
    const frets = Array.from({ length: 13 }, (_, i) => i); // 0 = open
    const dotFrets = [3, 5, 7, 9, 12];

    // Simple mapping of notes per string for demonstration
    const notesPerString = {
        E: ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"],
        A: ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"],
        D: ["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D"],
        G: ["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G"],
        B: ["B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
        e: ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"],
    };


    const toggleNote = (string, fret) => {
        const key = string + fret;
        setSelectedNotes((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <div className="fretboard">
            {strings.map((string, stringIndex) => (
                <div key={string} className="string-row">
                    {frets.map((fret) => {
                        const key = string + fret;
                        const active = !!selectedNotes[key];

                        // Determine dots
                        let dotElements = [];
                        if (dotFrets.includes(fret)) {
                            if (fret === 12) {
                                // double dots on G & B strings
                                if (stringIndex === 2 || stringIndex === 4) {
                                    dotElements = [
                                        <div key="dot1" className="fret-dot top" />,
                                        <div key="dot2" className="fret-dot bottom" />,
                                    ];
                                }
                            } else if (stringIndex === 2) {
                                // single dots between strings
                                dotElements = [<div key="dot" className="fret-dot" />];
                            }
                        }

                        return (
                            <div
                                key={key}
                                className={`fret ${active ? "active" : ""}`}
                                onClick={() => toggleNote(string, fret)}
                            >
                                {/* show note names optionally */}
                                <div className="note-name">{notesPerString[string][fret]}</div>
                                {fret === 0 && <div className="open-string-label">{string}</div>}
                                {dotElements}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

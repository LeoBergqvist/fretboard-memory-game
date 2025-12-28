import React from "react";
// import "./GuitarFretboard.css";


// Guitar fretboard component using plain CSS (no Tailwind)


const STRINGS = ["E", "A", "D", "G", "B", "E"];


export default function GuitarFretboard({ frets = 12, highlightFret = null }) {
    return (
        <div className="fretboard-wrapper">
            <div className="fretboard">
                {STRINGS.map((string, stringIndex) => (
                    <div key={stringIndex} className="string-row">
                        <div className="string-label">{string}</div>


                        <div className="frets">
                            {Array.from({ length: frets + 1 }).map((_, fretIndex) => (
                                <div
                                    key={fretIndex}
                                    className={`fret ${fretIndex === 0 ? "nut" : ""} ${highlightFret === fretIndex ? "highlight" : ""}`}
                                >
                                    <div className="string-line" />


                                    {/* Single fret markers */}
                                    {[3, 5, 7, 9].includes(fretIndex) && stringIndex === 2 && (
                                        <div className="fret-dot" />
                                    )}


                                    {/* Double dot at 12th fret */}
                                    {fretIndex === 12 &&
                                        (stringIndex === 1 || stringIndex === 4) && (
                                            <div className="fret-dot" />
                                        )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
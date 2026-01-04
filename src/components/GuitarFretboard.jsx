import React, { useEffect, useRef } from "react";
import MnemonicImage from "./MnemonicImage";

const STRINGS = ["E", "A", "D", "G", "B", "E"].reverse();

export default function GuitarFretboard({ frets = 12, highlightFret = null }) {
    const fretRefs = useRef([]);

    useEffect(() => {
        if (highlightFret != null) {
            fretRefs.current[highlightFret]?.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        }
    }, [highlightFret]);

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
                                    ref={stringIndex === 0 ? el => (fretRefs.current[fretIndex] = el) : null}
                                    className={`fret ${fretIndex === 0 ? "nut" : ""} ${highlightFret === fretIndex ? "highlight" : ""
                                        }`}
                                >
                                    <div className="string-line" />

                                    {/* Fret dots */}
                                    {[3, 5, 7, 9].includes(fretIndex) && stringIndex === 2 && (
                                        <div className="fret-dot" />
                                    )}

                                    {fretIndex === 12 &&
                                        (stringIndex === 1 || stringIndex === 4) && (
                                            <div className="fret-dot" />
                                        )}

                                    {/* 🎯 Fret numbers on lowest string */}
                                    {stringIndex === STRINGS.length - 1 && (
                                        <div className="fret-number">
                                            {fretIndex}
                                        </div>
                                    )}

                                    <MnemonicImage />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

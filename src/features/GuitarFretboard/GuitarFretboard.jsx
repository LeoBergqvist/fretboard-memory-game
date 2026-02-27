import React, { useEffect, useRef } from "react";
import { STRINGS } from "../../data/strings";
import { STRING_TUNINGS } from "../../data/notes";
import { getNoteAtFret } from "../../utils/getNoteAtFret";

// for possible future use, see comment below over "const image"
// import { images } from "../../data/images";

export default function GuitarFretboard({ frets = 12, highlightFret = null }) {
    const fretRefs = useRef([]);


    // image that maps onto fretboard component
    // if want to map images to fretboard in future implementation

    // const image = highlightFret != null ? images[highlightFret] : null;

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
                        {/* String label (E A D G B E) */}
                        <div className="string-label">{string}</div>

                        <div className="frets">
                            {Array.from({ length: frets + 1 }).map((_, fretIndex) => {
                                const isHighlighted = highlightFret === fretIndex;
                                const noteName = getNoteAtFret(
                                    STRING_TUNINGS[stringIndex],
                                    fretIndex
                                );

                                return (
                                    <div
                                        key={fretIndex}
                                        ref={
                                            stringIndex === 0
                                                ? (el) => (fretRefs.current[fretIndex] = el)
                                                : null
                                        }
                                        className={`fret ${fretIndex === 0 ? "nut" : ""} ${isHighlighted ? "highlight" : ""
                                            }`}
                                    >
                                        <div className="string-line" />

                                        {/* Fret dots */}
                                        {[3, 5, 7, 9].includes(fretIndex) &&
                                            stringIndex === 2 && <div className="fret-dot" />}

                                        {fretIndex === 12 &&
                                            (stringIndex === 1 || stringIndex === 4) && (
                                                <div className="fret-dot" />
                                            )}


                                        {/* 🎵 Note name on highlighted fret */}
                                        {isHighlighted && fretIndex != 0 && (
                                            <div className="note-name">{noteName}</div>
                                        )}
                                        {/* Fret numbers on lowest string */}
                                        {stringIndex === STRINGS.length - 1 && (
                                            <div className="fret-number">{fretIndex}</div>
                                        )}

                                        {/* Mnemonic image only on highlighted fret
                                        {isHighlighted && image && (
                                            <MnemonicImage image={image} />
                                        )} */}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

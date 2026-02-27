import React from "react";
import StoryImage from "./StoryImage";
import PlayStartButton from "../Practice/PlayStartButton";
import { levelsPractice } from "../../data/levels"
import GuitarFretboard from "../GuitarFretboard/GuitarFretboard";

export default function MnemonicDescription({
    headline,
    description,
    index,
    lengthIndex,
    level,
    onNext,
    onBack,
}) {
    const IndexesImageActive = [5];
    const levelPractice = levelsPractice[level];
    const IndexesFretboardActive = [2, 4,];

    return (
        <div className="mnemonic-container-description">
            {headline && <h1>{headline}</h1>}

            <p>
                {description.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </p>

            <StoryImage
                level={level}
                alt="Fretboard story image"
                style={{
                    display: IndexesImageActive.includes(index) ? "block" : "none",
                }}
            />

            {
                IndexesFretboardActive.includes(index) && (<GuitarFretboard frets={level + 3} highlightFret={level} />)
            }
            {

                index === lengthIndex - 1 && (
                    <PlayStartButton to={levelPractice.route} />
                )
            }
            <div >
                <button className="navigation-button" onClick={onBack} disabled={index === 0}>
                    Back
                </button>

                <button className="navigation-button" onClick={onNext} disabled={index === lengthIndex - 1}>
                    Next
                </button>

            </div>
            <p>{index + 1} / {lengthIndex}</p>
        </div>
    );
}

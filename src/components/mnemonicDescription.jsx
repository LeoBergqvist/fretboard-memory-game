import React from "react";
import { imagesStories } from "../data/images";
import StoryImage from "../components/StoryImage";
import PlayStartButton from "./PlayStartButton";
import { levelsPractice } from "../data/levels"

export default function MnemonicDescription({
    headline,
    description,
    index,
    lengthIndex,
    onNext,
    onBack,
}) {
    const IndexesImageActive = [5];
    const level = 0;
    const levelPractice = levelsPractice[level]
    console.log(levelPractice)
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
                index={level}
                alt="Fretboard story"
                style={{
                    display: IndexesImageActive.includes(index) ? "block" : "none",
                }}
            />
            {

                index === lengthIndex - 1 && (
                    <PlayStartButton to={levelPractice.route} />
                )
            }
            <div>
                <button className="navigation-button" onClick={onBack} disabled={index === 0}>
                    Back
                </button>

                <button className="navigation-button" onClick={onNext} disabled={index === lengthIndex - 1}>
                    Next
                </button>





                <p>{index + 1} / {lengthIndex}</p>
            </div>


        </div>
    );
}

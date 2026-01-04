import React from "react";

export default function MnemonicDescription({
    headline,
    description,
    index,
    lengthIndex,
    onNext,
    onBack,
}) {
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

            <button className="navigation-button" onClick={onBack} disabled={index === 0}>
                Back
            </button>

            <button className="navigation-button" onClick={onNext} disabled={index === lengthIndex - 1}>
                Next
            </button>
            <p>{index + 1} / {lengthIndex}</p>

        </div>
    );
}

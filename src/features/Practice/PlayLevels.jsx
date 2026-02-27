import PlayButton from "./PlayButton";

export default function PlayLevels() {
    return (
        <div className="courses">
            <PlayButton
                title="Fretboard Mnemonics"
                to="/play/fretboard"
            />


            <PlayButton
                title="Groupings"
                to=""
            />
        </div>
    );
}

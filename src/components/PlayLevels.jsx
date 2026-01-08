import CourseButton from "./CourseButton";

export default function PlayLevels() {
    return (
        <div className="courses">
            <CourseButton
                title="Fretboard Mnemonics"
                to="/play/fretboard"
            />

            <CourseButton
                title="Groupings"
                to="/play/fretboard"
            />
        </div>
    );
}

import CourseButton from "./CourseButton";

export default function Courses() {
    return (
        <div className="course">
            <CourseButton
                title="Fretboard Mnemonics"
                to="/study/fretboard"
            />

            <CourseButton
                title="Scales"
                to="/study/fretboard"
            />

            <CourseButton
                title="Chords"
                to="/study/fretboard"
            />
        </div>
    );
}

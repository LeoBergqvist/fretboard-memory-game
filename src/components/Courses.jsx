import CourseButton from "./CourseButton";

export default function Courses() {
    return (
        <div className="courses">
            <CourseButton
                title="Fretboard Mnemonics"
                to="/study/fretboard"
            />

            <CourseButton
                title="Groupings"
                to="/study/fretboard"
            />
        </div>
    );
}

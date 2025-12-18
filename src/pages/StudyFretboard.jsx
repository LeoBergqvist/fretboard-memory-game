import CourseButton from "../components/CourseButton";
import CourseDescription from "../components/CourseDescription";
import Courses from "../components/Courses";
import Navbar from "../components/Navbar";
import CourseStartButton from "../components/CourseStartButton";
import LevelButton from "../components/LevelButton";

export default function StudyFretboard() {
    return (
        <>
            <Navbar />
            <h2>Fretboard</h2>
            <div className="course-container">
                <CourseButton title={"Fretboard"} to={"/study/"} />
                <CourseDescription description={"Learn mnemonics for each string in positions 0, 3, 5, 7, 10"} />
            </div>
            <div className="course-container">
                <div>
                    <CourseStartButton />
                    <LevelButton title="0" />
                    <LevelButton title="3" />
                    <LevelButton title="5" />
                    <LevelButton title="7" />
                </div>
                <CourseDescription description={"Learn mnemonics for each string in positions 0, 3, 5, 7, 10"} />
            </div>
        </>
    )
}
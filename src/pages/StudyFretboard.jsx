import CourseButton from "../components/CourseButton";
import CourseDescription from "../components/CourseDescription";
import Courses from "../components/Courses";
import Navbar from "../components/Navbar";
import CourseStartButton from "../components/CourseStartButton";
import LevelButton from "../components/LevelButton";
import CourseLevels from "../components/CourseLevels";

export default function StudyFretboard() {
    return (
        <>
            <Navbar />
            <div className="course-container">
                <CourseButton title={"Fretboard Mnemonics"} to={"/study/"} />
                <CourseDescription headline={"Description:"} description={"Learn mnemonics for each string in positions 0, 3, 5, 7, 10"} />
            </div>
            <div className="course-container">
                <div>
                    {/* <CourseStartButton /> */}
                    <CourseLevels />
                </div>
                <CourseDescription headline={"Last attempts:"} description={"Score / Date"} />
            </div>
        </>
    )
}
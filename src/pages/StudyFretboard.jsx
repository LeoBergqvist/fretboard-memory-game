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
                <CourseDescription
                    headline={"Description:"}
                    description={"Learn mnemonics to remember the notes on each string at frets 0, 3, 5, 7, and 10."} />
                <CourseLevels />
            </div>
        </>
    )
}
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
                    description={
                        "In these lessons we begin to learn the notes on the fretboard using memory tricks (mnemonics) to remember the notes on each string \n\n We will look at how we can use words and images to remember more easily"
                    } />
                <CourseLevels />
            </div>
        </>
    )
}
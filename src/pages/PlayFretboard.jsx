import CourseButton from "../components/CourseButton";
import CourseDescription from "../components/CourseDescription";
import Courses from "../components/Courses";
import Navbar from "../components/Navbar";
import CourseStartButton from "../components/CourseStartButton";
import LevelButton from "../components/LevelButton";
import CourseLevels from "../components/CourseLevels";
import PlayLevelsFrets from "../components/PlayLevelsFrets";

export default function PlayFretboard() {
    return (
        <>
            <Navbar />
            <div className="course-container">
                <CourseDescription
                    headline={"Description:"}
                    description={"Practice the notes on the fretboard using memory tricks (mnemonics) to remember the notes on each string vertically. \n\n You will complete three stages for each fret"} />
                {/* <CourseLevels /> */}
                <PlayLevelsFrets />
            </div>
        </>
    )
}
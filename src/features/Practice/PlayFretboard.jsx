import CourseDescription from "../../components/shared/CourseDescription";
import Navbar from "../../components/shared/Navbar";
import CourseLevels from "../../components/shared/CourseLevels";
import PlayLevelsFrets from "./PlayLevelsFrets";

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
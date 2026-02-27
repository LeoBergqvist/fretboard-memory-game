import CourseDescription from "../../components/shared/CourseDescription";
import Navbar from "../../components/shared/Navbar";
import CourseLevels from "../../components/shared/CourseLevels";

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
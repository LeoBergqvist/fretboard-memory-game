import { Link } from "react-router-dom";

export default function CourseStartButton({ to }) {

    return (
        <div className="course-start-button">
            <Link to={to}>
                <h2>
                    Start
                </h2>
            </Link>
        </div>
    );
}
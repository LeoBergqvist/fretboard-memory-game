import { Link } from "react-router-dom";

export default function CourseButton({ title, to }) {


    return (
        <div className="course-button">
            <Link to={to} >
                <h1>
                    {title}
                </h1>
            </Link>
        </div>
    );
}

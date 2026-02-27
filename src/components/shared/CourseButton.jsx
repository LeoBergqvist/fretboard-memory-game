import { Link } from "react-router-dom";

export default function CourseButton({ title, to }) {
    const isDisabled = !to; // automatically disabled if `to` is null or undefined

    return (
        <div className={`course-button ${isDisabled ? "disabled" : ""}`}>
            {isDisabled ? (
                <div>
                    {title}
                </div>
            ) : (
                <Link to={to}>
                    {title}
                </Link>
            )}
        </div>
    );
}

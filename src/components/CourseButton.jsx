import { Link } from "react-router-dom";

export default function CourseButton({ title, to }) {
    const isDisabled = !to; // automatically disabled if `to` is null or undefined

    return (
        <div className={`course-button ${isDisabled ? "disabled" : ""}`}>
            {isDisabled ? (
                <h1>{title}</h1> // render as plain text when disabled
            ) : (
                <Link to={to}>
                    <h1>{title}</h1>
                </Link>
            )}
        </div>
    );
}

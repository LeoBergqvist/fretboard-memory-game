import { Link } from "react-router-dom";

export default function PlayStartButton({ to }) {
    if (!to) {
        return (
            <div className="course-start-button disabled">
                Start
            </div>
        );
    }

    return (
        <div className="play-start-button">
            <Link to={to}>
                Click to start practicing
            </Link>
        </div>
    );
}

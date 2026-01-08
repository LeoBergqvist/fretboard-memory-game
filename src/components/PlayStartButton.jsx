import { Link } from "react-router-dom";

export default function PlayStartButton({ to }) {
    if (!to) {
        return (
            <div className="course-start-button disabled">
                <h2>Start</h2>
            </div>
        );
    }

    return (
        <div className="play-start-button">
            <Link to={to}>
                <h2> 🎸Start 🎸</h2>
            </Link>
        </div>
    );
}

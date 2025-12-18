import { Link } from "react-router-dom";

export default function LevelButton({ title, to }) {
    return (
        <div class="course-level-button">
            <Link to={to}>
                <h1>
                    {title}
                </h1>
            </Link>
        </div >
    );
}

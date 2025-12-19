import { Link } from "react-router-dom";

export default function LevelButton({
    title,
    to,
    active,
    setActiveRoute,
}) {
    const handleClick = (e) => {
        if (!active) {
            e.preventDefault();     // first click: select only
            setActiveRoute(to);     // ✅ this enables Start button
        }
    };

    return (
        <div className={`course-level-button ${active ? "active" : ""}`}>
            <Link to={to} onClick={handleClick}>
                <h2>{title}</h2>
            </Link>
        </div>
    );
}

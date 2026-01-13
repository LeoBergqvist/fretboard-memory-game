import { Link } from "react-router-dom";

export default function LevelButton({
    title,
    to,
    active,
    // setActiveRoute,
    // setActiveFret
}) {
    // const handleClick = (e) => {
    //     if (!active) {
    //         e.preventDefault();     // first click: select only
    //         // setActiveRoute(to);     // ✅ this enables Start button
    //         // setActiveFret(title);
    //     }

    // };
    const baseClass = to?.includes("play")
        ? "play-level-button"
        : "course-level-button";


    {/* <Link to={to} onClick={handleClick}> */ }
    return (
        <div className={`${baseClass} ${active ? "active" : ""}`}>
            <Link to={to}>
                {title}
            </Link>
        </div>
    );
};
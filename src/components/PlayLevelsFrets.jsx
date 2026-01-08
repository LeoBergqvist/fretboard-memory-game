import { useState } from "react";
import LevelButton from "../components/LevelButton";
import CourseStartButton from "../components/CourseStartButton";
import { levelsPractice } from "../data/levels"


export default function PlayLevelsFrets() {
    const [activeRoute, setActiveRoute] = useState(null);
    const [activeFret, setActiveFret] = useState(null);

    return (
        <div className="course-levels">
            {levelsPractice.map((level) => (
                <LevelButton
                    key={level.title}
                    title={level.title}
                    to={level.route}
                    active={activeRoute === level.route}
                    setActiveRoute={setActiveRoute}
                    setActiveFret={setActiveFret}
                />
            ))}
            <CourseStartButton fret={activeFret} to={activeRoute} />

        </div>
    );
}

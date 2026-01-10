import { useState } from "react";
import LevelButton from "../components/LevelButton";
import CourseStartButton from "../components/CourseStartButton";
import { levelsPractice } from "../data/levels"


export default function PlayLevelsFrets() {
    // const [activeRoute, setActiveRoute] = useState(null);
    // const [activeFret, setActiveFret] = useState(null);

    return (
        <div className="course-levels">
            {Object.values(levelsPractice).map((level) => (
                <LevelButton
                    key={level.fret}
                    title={level.title}
                    to={level.route}
                // active={activeRoute === level.route}
                // setActiveRoute={setActiveRoute}
                // setActiveFret={() => setActiveFret(level.fret)}
                />
            ))}
            {/* <CourseStartButton fret={activeFret} to={activeRoute} /> */}

        </div>
    );
}

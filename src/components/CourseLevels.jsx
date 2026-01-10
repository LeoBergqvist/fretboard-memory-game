import { useState } from "react";
import LevelButton from "../components/LevelButton";
import CourseStartButton from "../components/CourseStartButton";
import { levels } from "../data/levels"


export default function CourseLevels() {
    const [activeRoute, setActiveRoute] = useState(null);
    const [activeFret, setActiveFret] = useState(null);

    return (
        <div className="course-levels">
            {levels.map((level) => (
                <LevelButton
                    key={level.title}
                    title={level.title}
                    to={level.route}
                    active={activeRoute === level.route}
                // setActiveRoute={setActiveRoute}
                // setActiveFret={setActiveFret}
                />
            ))}
            {/* <CourseStartButton fret={activeFret} to={activeRoute} /> */}

        </div>
    );
}

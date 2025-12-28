import { useState } from "react";
import LevelButton from "../components/LevelButton";
import CourseStartButton from "../components/CourseStartButton";

const levels = [
    { title: "0", route: "/study/level/0" },
    { title: "3", route: "/study/level/3" },
    { title: "5", route: "/study/level/5" },
    { title: "7", route: "/study/level/7" },
];

export default function CourseLevels() {
    const [activeRoute, setActiveRoute] = useState(null);

    return (
        <div className="course-levels">
            <CourseStartButton to={activeRoute} />
            {levels.map((level) => (
                <LevelButton
                    key={level.title}
                    title={level.title}
                    to={level.route}
                    active={activeRoute === level.route}
                    setActiveRoute={setActiveRoute}
                />
            ))}

        </div>
    );
}

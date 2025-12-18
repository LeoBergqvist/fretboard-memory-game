export default function CourseDescription({ description }) {
    return (
        <div className="course-container-description">
            <h1>
                Description:
            </h1>
            <p>
                {description}
            </p>
        </div>
    );
}
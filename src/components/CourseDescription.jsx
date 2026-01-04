import React from 'react';

export default function CourseDescription({ headline, description }) {
    return (
        <div className="course-container-description">
            <h1>{headline}</h1>

            <p>
                {description.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </p>
        </div>
    );
}

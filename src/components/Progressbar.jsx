export default function ProgressBar({ current, total }) {
    const percentage = ((current + 1) / total) * 100;
    const qt = "me"
    return (
        <div className="progress-container">
            <div className="progress-header">
                Stage {current + 1} / {total}
            </div>

            <div className="progress-track">
                <div
                    className="progress-fill"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}

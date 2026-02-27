import { Link } from "react-router-dom";

export default function PlayButton({ title, to }) {
    const isDisabled = !to; // automatically disabled if `to` is null or undefined

    return (
        <div className={`play-button ${isDisabled ? "disabled" : ""}`}>
            {isDisabled ? (
                <div>
                    {title}
                </div>
            ) : (
                <Link to={to}>
                    {title}
                </Link>
            )}
        </div>
    );
}

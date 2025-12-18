import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className='nav-links'>
                <li>
                    <NavLink to="/" end>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/study">Study</NavLink>
                </li>
                <li>
                    <NavLink to="/play">Play</NavLink>
                </li>
            </ul>
        </nav>
    );
}

import { NavLink } from "react-router-dom";
import guitarImg from "../../../src/assets/images/guitar.png";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="guitar-img" src={guitarImg} />

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

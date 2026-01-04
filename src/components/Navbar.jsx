import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">

            <ul className='nav-links'>
                {/* <img src="src\assets\images\guitar.png"></img> */}
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

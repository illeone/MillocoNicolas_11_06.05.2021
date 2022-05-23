import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg"

const Header = () => {
    return (
    <header className="header">
        <div className="logo">
            <img className="logo_img" src={logo} alt="Kasa" />
        </div>
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "header_navlink" : "header_navlink_active")}>
                    <li className="z">accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "header_navlink" : "header_navlink_active")}>
                    <li className="z">à propos</li>
                </NavLink>
            </ul>
        </div>
    </header>

    );
};
  
export default Header;
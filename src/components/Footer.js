import { NavLink } from "react-router-dom";
import logo from "../assets/logo_negative.svg";

const Footer = () => {
    return (
      <footer className="footer">
        <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
          <img className="logo_img_svg" src={logo} alt="Kasa" />
        </NavLink>

        <p className="copyright">&copy; 2022 Kasa. All rights reserved</p>
      </footer>
    );
}

export default Footer;
import { NavLink } from "react-router-dom";
import "./style.scss";


const Header = () => {
    return (
        <header className="header">
            <img src="/logo.svg" alt="Logo" className="header__logo" />
            <nav className="header__links">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/a-propos">A propos</NavLink>
            </nav>
        </header>
    );
};

export default Header;
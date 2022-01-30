import {NavLink} from "react-router-dom";
import { Link } from "react-scroll";

const Navigation = () => {

  return (
    <div className="navigation">
        <ul className="navigation_log">
          <li className="navigation_log--list">
            <NavLink to="/sign-in" className="navigation_log--link">Zaloguj</NavLink>
          </li>
          <li className="navigation_log-list">
            <NavLink to="/sign-up" className="navigation_log--link sign-up">Załóż konto</NavLink>
          </li>
        </ul>
        <div className="navigation_menu">
          <Link to="#home" className="navigation_menu--link">Start</Link>
          <Link to="#home-four-steps" className="navigation_menu--link">O co chodzi?</Link>
          <Link to="#home-about" className="navigation_menu--link">O nas</Link>
          <Link to="#home-organizations" className="navigation_menu--link">Fundacje i organizacje</Link>
          <Link to="#home-form" className="navigation_menu--link">Kontakt</Link>
        </div>
    </div>
  )
}

export default Navigation;

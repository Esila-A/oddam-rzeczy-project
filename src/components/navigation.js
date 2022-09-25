import {NavLink} from "react-router-dom";
import { Link } from "react-scroll";
import AfterSignIn from "./after-sign-in";
import BeforeSignIn from "./before-sign-in";
import { useAuth } from "./authContext";

const Navigation = () => {

  const { currentUser } = useAuth();

  return (
    <div className="navigation">
      {!currentUser && <BeforeSignIn />}
      {currentUser && <AfterSignIn />}
      <div className="navigation_menu">
        <NavLink to="/oddam-rzeczy-project" className="navigation_menu--link">
          Start
        </NavLink>
        <Link to="#home-four-steps" className="navigation_menu--link">
          O co chodzi?
        </Link>
        <Link to="#home-about" className="navigation_menu--link">
          O nas
        </Link>
        <Link to="#home-organizations" className="navigation_menu--link">
          Fundacje i organizacje
        </Link>
        <Link to="#home-form" className="navigation_menu--link">
          Kontakt
        </Link>
      </div>
    </div>
  );
}

export default Navigation;

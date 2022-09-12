import {NavLink} from "react-router-dom";

const BeforeSignIn = () => {

  return (
    <ul className="before">
      <li className="before_list">
        <NavLink to="/sign-in" className="before_option">Zaloguj</NavLink>
      </li>
      <li className="before_list">
        <NavLink to="/sign-up" className="before_option border">Załóż konto</NavLink>
      </li>
    </ul>
  )
}

export default BeforeSignIn;

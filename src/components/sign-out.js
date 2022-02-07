import { NavLink } from "react-router-dom";
import decoration from "../assets/Decoration.svg";

const SignOut = () => {
  return (
    <div className="sign-out">
      <h1 className="sign-out_heading">Wylogowanie nastąpiło<br/>pomyślnie!</h1>
      <img src={decoration} alt="decoration" className="sign-out_decoration" />
      <NavLink to="/" className="sign-out_button">Strona główna</NavLink>
    </div>
  );
};

export default SignOut;

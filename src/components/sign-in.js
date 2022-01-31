import {NavLink} from "react-router-dom";
import decoration from "../assets/Decoration.svg";

  const SignIn = () => {
    return (
      <div className="sign-in">
        <h1 className="sign-in_heading">Zaloguj się</h1>
        <img src={decoration} alt="decoration" className="sign-in_decoration"/>
        <form className="sign-in_form">
          <label className="requests">
            <p className="text">Email</p>
            <input type="email" name="email" className="input input_email"/>
          </label>
          <label className="requests">
            <p className="text">Hasło</p>
            <input type="password" name="password" className="input input_password"/>
          </label>
        </form>
        <div className="buttons">
          <NavLink to="/sign-up" className="buttons_sign-up">Załóż konto</NavLink>
          <button type="submit" className="buttons_sign-in">Zaloguj się</button>
        </div>
      </div>
    )
}

export default SignIn;
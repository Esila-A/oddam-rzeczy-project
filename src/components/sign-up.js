import {NavLink} from "react-router-dom";
import decoration from "../assets/Decoration.svg";

const SignUp = () => {
    return (
      <div className="sign-up">
        <h1 className="sign-up_heading">Zaloguj się</h1>
        <img src={decoration} alt="decoration" className="sign-up_decoration"/>
        <form className="sign-up_form">
          <label className="requests">
            <p className="text">Email</p>
            <input type="email" name="email" className="input input_email"/>
          </label>
          <label className="requests">
            <p className="text">Hasło</p>
            <input type="password" name="password" className="input input_password"/>
          </label>
          <label className="requests">
            <p className="text">Powtórz hasło</p>
            <input type="password" name="password-repeat" className="input input_password-repeat"/>
          </label>
        </form>
        <div className="buttons">
          <NavLink to="/sign-in" className="buttons_sign-in">Zaloguj się</NavLink>
          <button type="submit" className="buttons_sign-up">Załóż konto</button>
        </div>
      </div>
    )
}

export default SignUp;

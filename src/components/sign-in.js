import { useState } from "react";
import {NavLink} from "react-router-dom";
import decoration from "../assets/Decoration.svg";

  const SignIn = () => {

    const initialValues = {email: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
    };

    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

      if (!regex.test(values.email)) {
        errors.email = "Podany email jest nieprawidłowy!"
      }
      if (values.password.length < 6) {
        errors.password = "Podane hasło jest za krótkie!"
      }
      return errors;
    }

    return (
      <div className="sign-in">
        <h1 className="sign-in_heading">Zaloguj się</h1>
        <img src={decoration} alt="decoration" className="sign-in_decoration"/>
        <form className="sign-in_form" onSubmit={handleSubmit}>
          <div className="sign-in_form--fields">
            <label className="requests">
              <p className="text">Email</p>
              <input type="email" name="email" className={`input input_email ${formErrors.email && "error"}`} values={formValues.email} onChange={handleChange}/>
            </label>
            <p className="error-message">{formErrors.email}</p>
            <label className="requests">
              <p className="text pass-txt">Hasło</p>
              <input type="password" name="password" className={`input input_password ${formErrors.password && "error"}`} values={formValues.password} onChange={handleChange}/>
            </label>
            <p className="error-message">{formErrors.password}</p>
          </div>
          <div className="buttons">
            <NavLink to="/sign-up" className="buttons_sign-up">Załóż konto</NavLink>
            <button type="submit" className="buttons_sign-in">Zaloguj się</button>
          </div>
        </form>
      </div>
    )
}

export default SignIn;

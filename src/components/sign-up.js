import { useState } from "react";
import {NavLink} from "react-router-dom";
import decoration from "../assets/Decoration.svg";

const SignUp = () => {

    const initialValues = {email: "", password: "", password2: ""};
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
      if (values.password2.length === 0) {
        errors.password2 = "Potwierdź hasło!"
      } else if (values.password2 !== values.password1) {
          errors.password2 = "Hasło musi być takie same!"
      }
      return errors;
    }


    return (
      <div className="sign-up">
        <h1 className="sign-up_heading">Załóż konto</h1>
        <img src={decoration} alt="decoration" className="sign-up_decoration"/>
        <form className="sign-up_form" onSubmit={handleSubmit}>
          <div className="sign-up_form--fields">
            <label className="requests">
            <p className="text">Email</p>
            <input type="email" name="email" className={`input input_email ${formErrors.email && "error"}`} values={formValues.email} onChange={handleChange}/>
          </label>
          <p className="error-message">{formErrors.email}</p>
          <label className="requests">
            <p className="text pass-txt">Hasło</p>
            <input type="password" name="password" className={`input input_password ${formErrors.email && "error"}`} values={formValues.password} onChange={handleChange}/>
          </label>
          <p className="error-message">{formErrors.password}</p>
          <label className="requests">
            <p className="text pass-txt">Powtórz hasło</p>
            <input type="password" name="password2" className={`input input_password-repeat ${formErrors.email && "error"}`} values={formValues.password2} onChange={handleChange}/>
          </label>
          <p className="error-message">{formErrors.password2}</p>
          </div>
          <div className="buttons">
            <NavLink to="/sign-in" className="buttons_sign-in">Zaloguj się</NavLink>
            <button type="submit" className="buttons_sign-up">Załóż konto</button>
          </div>
        </form>
      </div>
    )
}

export default SignUp;

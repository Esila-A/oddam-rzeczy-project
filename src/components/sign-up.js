import { NavLink, useNavigate } from "react-router-dom";
import decoration from "../assets/Decoration.svg";
import { useRef, useState } from "react";
import { useAuth } from "./authContext";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const {signup} = useAuth();
  const [error, setError] = useState("")
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    let hasErrors = false;

    if (!emailRef.current.value) {
      setErrorEmail("Podaj email");
      hasErrors = true;
    } else if (!regex.test(emailRef.current.value)) {
      setErrorEmail("Podany email jest nieprawidłowy");
      hasErrors = true;
    } else {
      setErrorEmail("");
    }

    if (!passwordRef.current.value) {
      setErrorPassword("Podaj hasło");
      hasErrors = true;
    } else if (passwordRef.current.value.length < 6) {
      setErrorPassword("Hasło musi składać się z min. 6 znaków");
      hasErrors = true;
    } else {
      setErrorPassword("");
    }

    if (!passwordConfirmRef.current.value.length) {
      setErrorPasswordConfirm("Potwierdź hasło");
      hasErrors = true;
    } else if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setErrorPasswordConfirm("Hasło musi być takie same");
      hasErrors = true;
    } else {
      setErrorPasswordConfirm("");
    }

    if (!hasErrors) {
      try {
        setLoading(true);
        await signup(emailRef.current.value, passwordRef.current.value);
        navigate("/");
      } catch {
        setError("Nie udało się zarejestrować");
      }
      setLoading(false);
    }
  }

  return (
    <div className="sign-up">
      <h1 className="sign-up_heading">Załóż konto</h1>
      <img src={decoration} alt="decoration" className="sign-up_decoration" />
      <form className="sign-up_form" onSubmit={handleSubmit}>
        <div className="sign-up_form--fields">
          <p className="error-message fail">{error}</p>
          <label className="requests">
            <p className="text">Email</p>
            <input
              type="email"
              name="email"
              className={`input input_email `}
              ref={emailRef}
            />
          </label>
          <p className="error-message">{errorEmail}</p>
          <label className="requests">
            <p className="text pass-txt">Hasło</p>
            <input
              type="password"
              name="password"
              className={`input input_password `}
              ref={passwordRef}
            />
          </label>
          <p className="error-message">{errorPassword}</p>
          <label className="requests">
            <p className="text pass-txt">Powtórz hasło</p>
            <input
              type="password"
              name="password2"
              className={`input input_password-repeat`}
              ref={passwordConfirmRef}
            />
          </label>
          <p className="error-message">{errorPasswordConfirm}</p>
        </div>
        <div className="buttons">
          <NavLink to="/sign-in" className="buttons_sign-in">
            Zaloguj się
          </NavLink>
          <button type="submit" className="buttons_sign-up" disabled={loading}>
            Załóż konto
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

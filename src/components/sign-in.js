import { useRef, useState } from "react"
import { useAuth } from "./authContext"; 
import { NavLink, useNavigate } from "react-router-dom"
import decoration from "../assets/Decoration.svg";

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

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

    if (!hasErrors) {
      try {
        setError("");
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        navigate("/");
      } catch {
        setError("Nie ma takiego użytkownika :(");
      }
      setLoading(false);
    }
  }

  return (
    <div className="sign-in">
      <h1 className="sign-in_heading">Zaloguj się</h1>
      <img src={decoration} alt="decoration" className="sign-in_decoration" />
      <form className="sign-in_form" onSubmit={handleSubmit}>
        <div className="sign-in_form--fields">
          <p className="error-message fail">{error}</p>
          <label className="requests">
            <p className="text">Email</p>
            <input
              type="email"
              name="email"
              className={`input input_emai`}
              ref={emailRef}
            />
          </label>
          <p className="error-message">{errorEmail}</p>
          <label className="requests">
            <p className="text pass-txt">Hasło</p>
            <input
              type="password"
              name="password"
              className={`input input_password`}
              ref={passwordRef}
            />
          </label>
          <p className="error-message">{errorPassword}</p>
        </div>
        <div className="buttons">
          <NavLink to="/sign-up" className="buttons_sign-up">
            Załóż konto
          </NavLink>
          <button type="submit" className="buttons_sign-in" disabled={loading}>
            Zaloguj się
          </button>
        </div>
      </form>
    </div>
  );
}

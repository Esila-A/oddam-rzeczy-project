import { useState } from "react"
import { useAuth } from "./authContext";
import { NavLink, useNavigate } from "react-router-dom"

const AfterSignIn = () => {

  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/sign-out")
    } catch {
      setError("Nie udało się wylogować")
    }
  }

  return (
    <ul className="after">
      <li className="after_list">
        <p className="after_option fat hello">Cześć {currentUser.email}</p>
      </li>
      <li className="after_list">
        <NavLink to="hand-over" className="after_option border fat">
          Oddaj rzeczy
        </NavLink>
      </li>
      <li className="after_list">
        <button className="after_option--button" onClick={handleLogout}>
          Wyloguj
        </button>
      </li>
    </ul>
  );
}

export default AfterSignIn;

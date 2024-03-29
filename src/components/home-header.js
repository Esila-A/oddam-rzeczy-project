import heroImage from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg"
import { NavLink } from "react-router-dom";
import { useAuth } from "./authContext";

const HomeHeader = () => {

  const { currentUser } = useAuth();

  return (
    <div className="header" id="#header">
      <img src={heroImage} alt="heroImage" className="hero-image"/>
      <div className="header_content">
        <h1 className="header_content--heading">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
        <img src={decoration} alt="decoration" className="header_content--decoration"/>
        <div className="header_links">
          {!currentUser && <NavLink to="sign-in" className="header_link header_link--one">ODDAJ<br/>RZECZY</NavLink>}
          {!currentUser && <NavLink to="sign-in" className="header_link header_link--two">ZORGANIZUJ<br/>ZBIÓRKĘ</NavLink>}
          {currentUser && <NavLink to="hand-over" className="header_link header_link--one">ODDAJ<br/>RZECZY</NavLink>}
          {currentUser && <NavLink to="hand-over" className="header_link header_link--two">ZORGANIZUJ<br/>ZBIÓRKĘ</NavLink>}
        </div>
      </div>
    </div>
  )
}

export default HomeHeader;

import heroImage from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg"
import { Link } from "react-router-dom";

const HomeHeader = () => {

  return (
    <div className="header">
      <img src={heroImage} alt="heroImage" className="hero-image"/>
      <div className="header_content">
        <h1 className="header_content--heading">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
        <img src={decoration} alt="decoration" className="header_content--decoration"/>
        <div className="header_links">
          <Link to="/sign-in" className="header_link header_link--one">ODDAJ<br/>RZECZY</Link>
          <Link to="/sign-in" className="header_link header_link--two">ZORGANIZUJ<br/>ZBIÓRKĘ</Link>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader;

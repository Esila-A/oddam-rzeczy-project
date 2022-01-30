import decoration from "../assets/Decoration.svg";
import iconOne from "../assets/Icon-1.svg";
import iconTwo from "../assets/Icon-2.svg";
import iconThree from "../assets/Icon-3.svg";
import iconFour from "../assets/Icon-4.svg";
import { Link } from "react-router-dom";

const HomeFourSteps = () => {

  return (
    <div className="steps" id="#home-four-steps">
      <h1 className="steps_heading">Wystarczą 4 proste kroki</h1>
      <img src={decoration} className="steps_decoration"/>
      <div className="steps_content">
        <div className="steps_content--list">
          <img src={iconOne} />
          <h2>Wybierz rzeczy</h2>
          <hr/>
          <p>ubrania, zabawki,<br/>sprzęt i inne</p>
        </div>
        <div className="steps_content--list">
          <img src={iconTwo} />
          <h2>Spakuj je</h2>
          <hr/>
          <p>skorzystaj z<br/>worków na śmieci</p>
        </div>
        <div className="steps_content--list">
          <img src={iconThree} />
          <h2>Zdecyduj komu<br/>chcesz pomóc</h2>
          <hr/>
          <p>wybierz zaufane<br/>miejsce</p>
        </div>
        <div className="steps_content--list">
          <img src={iconFour} />
          <h2>Zamów kuriera</h2>
          <hr/>
          <p>kurier przyjedzie<br/>w dogodnym terminie</p>
        </div>
      </div>
      <Link to="/sign-in" className="steps_link">ODDAJ<br/>RZECZY</Link>
    </div>
  )
}

export default HomeFourSteps;

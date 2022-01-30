import React from "react";
// import {NavLink} from "react-router-dom";
import { ScrollLink } from "react-scroll";

const Menu = (props) => {
    return (
      <div>
        <ul></ul>
        <ul className="navigation">
          <li className="navigation-list" onClick={() => props.isMobilePhone && props.closeMenu()}>
            <ScrollLink to="/home" className="link">Start</ScrollLink>
          </li>
          <li className="navigation-list" onClick={() => props.isMobilePhone && props.closeMenu()}>
            <ScrollLink to="/home-four-steps" className="link">O co chodzi?</ScrollLink>
          </li>
          <li className="navigation-list" onClick={() => props.isMobilePhone && props.closeMenu()}>
            <ScrollLink to="/home-about" className="link">O nas</ScrollLink>
          </li>
          <li className="navigation-list" onClick={() => props.isMobilePhone && props.closeMenu()}>
            <ScrollLink to="/home-organizations" className="link">Fundacje i organizacje</ScrollLink>
          </li>
          <li className="navigation-list" onClick={() => props.isMobilePhone && props.closeMenu()}>
            <ScrollLink to="/home-form" className="link">Kontakt</ScrollLink>
          </li>
        </ul>
      </div>
    )
}

export default Menu;

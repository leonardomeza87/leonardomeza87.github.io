import React from "react";

import { ReactComponent as Logo } from "../images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Logo />
          <a href="#top">Leonardo Meza</a>
        </div>
        <nav>
          <ul>
            <li className="link">
              <a href="#about-me">About Me</a>
            </li>
            <li className="link">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="contact">
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

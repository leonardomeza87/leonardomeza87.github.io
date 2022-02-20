import React, { useState } from "react";

import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as ChevronDown } from "../images/chevron-down.svg";

const Header = () => {
  const [langMenuIsOpen, setLangMenuIsOpen] = useState(false);

  const handleClick = () => {
    setLangMenuIsOpen(!langMenuIsOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Logo />
          <a href="#top">Leonardo Meza</a>
        </div>
        <nav>
          <ul>
            <li>
              <button
                onMouseUp={handleClick}
                className={langMenuIsOpen ? "active" : ""}
              >
                <p>Language</p>
                <ChevronDown />
              </button>

              <div className={`lang-menu ${langMenuIsOpen ? "open" : ""}`}>
                <button className="active">English</button>
                <button>Spanish</button>
              </div>
            </li>
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
